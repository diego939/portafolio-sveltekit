import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

const DEFAULT_NOTIFY_TO = 'diegodavidalmiron17@gmail.com';

function parsePort(value: string | undefined, fallback: number): number {
	if (value === undefined || value === '') return fallback;
	const n = Number(value);
	return Number.isFinite(n) && n > 0 ? n : fallback;
}

export const POST: RequestHandler = async ({ request }) => {
	let body: unknown;
	try {
		body = await request.json();
	} catch {
		throw error(400, 'Cuerpo inválido');
	}

	if (!body || typeof body !== 'object') {
		throw error(400, 'Cuerpo inválido');
	}

	const { nombre, correo, asunto, mensaje } = body as Record<string, unknown>;
	const nombreStr = typeof nombre === 'string' ? nombre.trim() : '';
	const correoStr = typeof correo === 'string' ? correo.trim() : '';
	const asuntoStr = typeof asunto === 'string' ? asunto.trim() : '';
	const mensajeStr = typeof mensaje === 'string' ? mensaje.trim() : '';

	if (!nombreStr || !correoStr || !asuntoStr || !mensajeStr) {
		throw error(400, 'Complete todos los campos');
	}

	const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correoStr);
	if (!emailOk) {
		throw error(400, 'Correo no válido');
	}

	const host = env.SMTP_HOST;
	const user = env.SMTP_USER;
	const pass = env.SMTP_PASS;

	if (!host || !user || !pass) {
		console.error('SMTP: faltan SMTP_HOST, SMTP_USER o SMTP_PASS');
		throw error(500, 'Envío de correo no configurado');
	}

	const port = parsePort(env.SMTP_PORT, 587);
	const secure = env.SMTP_SECURE === 'true';
	const notifyTo = (env.CONTACT_NOTIFY_EMAIL ?? DEFAULT_NOTIFY_TO).trim() || DEFAULT_NOTIFY_TO;

	const transporter = nodemailer.createTransport({
		host,
		port,
		secure,
		auth: { user, pass }
	});

	const from = `"Contacto portfolio" <${user}>`;
	const ownerBody = `Correo: ${correoStr}\nNombre: ${nombreStr}\n\nMensaje:\n${mensajeStr}`;

	try {
		await Promise.all([
			transporter.sendMail({
				from,
				to: correoStr,
				subject: 'Gracias por contactarme',
				text: `Hola ${nombreStr},\n\nGracias por tu interés. En breve me comunicaré contigo.\n\nSaludos.`
			}),
			transporter.sendMail({
				from,
				to: notifyTo,
				subject: asuntoStr,
				text: ownerBody
			})
		]);
	} catch (e) {
		console.error('SMTP sendMail:', e);
		throw error(502, 'No se pudo enviar el correo');
	}

	return json({ ok: true });
};
