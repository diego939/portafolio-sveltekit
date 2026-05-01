import { error, json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import nodemailer from 'nodemailer';
import { env } from '$env/dynamic/private';

const DEFAULT_NOTIFY_TO = 'diegodavidalmiron17@gmail.com';

const BRAND = {
	name: 'Diego David Almirón',
	tagline: 'Analista Programador Universitario',
	accent: '#5b21b6',
	accentLight: '#7c3aed',
	surface: '#faf5ff',
	text: '#18181b',
	muted: '#52525b'
};

function parsePort(value: string | undefined, fallback: number): number {
	if (value === undefined || value === '') return fallback;
	const n = Number(value);
	return Number.isFinite(n) && n > 0 ? n : fallback;
}

/** Evita HTML arbitrario en el cuerpo del correo */
function escapeHtml(s: string): string {
	return s
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

function messageToHtmlParagraphs(escaped: string): string {
	const lines = escaped.replace(/\r\n/g, '\n').split('\n');
	return lines.map((line) => `<p style="margin:0 0 12px 0;font-size:15px;line-height:1.65;color:${BRAND.text};">${line ? line : '&nbsp;'}</p>`).join('');
}

function thankYouEmailHtml(nombre: string): string {
	const safe = escapeHtml(nombre);
	return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>Gracias por contactarme</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#f4f4f5;">
<tr>
<td align="center" style="padding:32px 16px;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(91,33,182,0.12);border:1px solid #e9d5ff;">
<tr>
<td style="height:6px;background-color:${BRAND.accent};background-image:linear-gradient(90deg,${BRAND.accent} 0%,${BRAND.accentLight} 50%,#4c1d95 100%);"></td>
</tr>
<tr>
<td style="padding:36px 32px 28px 32px;text-align:center;background:${BRAND.surface};">
<div style="display:inline-block;width:56px;height:56px;line-height:56px;background:#ede9fe;border-radius:14px;font-size:28px;margin-bottom:16px;">✉️</div>
<h1 style="margin:0 0 8px 0;font-size:22px;font-weight:700;color:${BRAND.text};letter-spacing:-0.02em;">¡Gracias por tu mensaje, ${safe}!</h1>
<p style="margin:0;font-size:15px;line-height:1.55;color:${BRAND.muted};">Ya recibí tu correo y lo revisaré con atención.</p>
</td>
</tr>
<tr>
<td style="padding:0 32px 32px 32px;">
<p style="margin:0 0 16px 0;font-size:15px;line-height:1.65;color:${BRAND.text};">Te responderé lo antes posible, normalmente en <strong style="color:${BRAND.accent};">menos de 24 horas hábiles</strong>.</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:1.65;color:${BRAND.text};">Si tenés algo urgente, podés responder a este mismo correo y lo veré en mi bandeja.</p>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:#f5f3ff;border-radius:12px;border:1px solid #ddd6fe;">
<tr>
<td style="padding:16px 18px;">
<p style="margin:0;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;color:${BRAND.accent};">Atentamente</p>
<p style="margin:8px 0 0 0;font-size:14px;line-height:1.55;color:${BRAND.muted};"><span style="color:${BRAND.text};font-weight:600;">Saludos cordiales.</span> Le agradezco su contacto y quedo a su disposición para ampliar cualquier información por este medio.</p>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:20px 32px 28px 32px;border-top:1px solid #f4f4f5;text-align:center;">
<p style="margin:0 0 4px 0;font-size:14px;font-weight:600;color:${BRAND.text};">${escapeHtml(BRAND.name)}</p>
<p style="margin:0;font-size:13px;color:${BRAND.muted};">${escapeHtml(BRAND.tagline)}</p>
</td>
</tr>
</table>
<p style="margin:20px 0 0 0;font-size:11px;color:#a1a1aa;text-align:center;">Este es un mensaje automático. Por favor no respondas si no querés continuar la conversación por correo.</p>
</td>
</tr>
</table>
</body>
</html>`;
}

function thankYouEmailText(nombre: string): string {
	return `Hola ${nombre},

Gracias por tu mensaje. Ya lo recibí y te responderé lo antes posible (normalmente en menos de 24 horas hábiles).

Saludos cordiales,
${BRAND.name}
${BRAND.tagline}`;
}

function ownerNotificationHtml(
	nombre: string,
	correo: string,
	asunto: string,
	mensaje: string
): string {
	const n = escapeHtml(nombre);
	const c = escapeHtml(correo);
	const mailHref = `mailto:${encodeURIComponent(correo)}`;
	const a = escapeHtml(asunto);
	const mEscaped = escapeHtml(mensaje);
	const mHtml = messageToHtmlParagraphs(mEscaped);

	return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width">
<title>Nuevo contacto desde el portfolio</title>
</head>
<body style="margin:0;padding:0;background-color:#18181b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color:#18181b;">
<tr>
<td align="center" style="padding:32px 16px;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 24px 48px rgba(0,0,0,0.35);">
<tr>
<td style="padding:24px 28px;background-color:${BRAND.accent};background-image:linear-gradient(135deg,${BRAND.accent} 0%,${BRAND.accentLight} 45%,#312e81 100%);">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%">
<tr>
<td>
<p style="margin:0 0 6px 0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.12em;color:rgba(255,255,255,0.85);">Nuevo mensaje · Portfolio</p>
<h1 style="margin:0;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.02em;line-height:1.25;">${a}</h1>
</td>
<td align="right" valign="top" style="width:52px;">
<span style="display:inline-block;width:48px;height:48px;line-height:48px;text-align:center;background:rgba(255,255,255,0.15);border-radius:12px;font-size:24px;">📬</span>
</td>
</tr>
</table>
</td>
</tr>
<tr>
<td style="padding:28px 28px 20px 28px;">
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:20px;">
<tr>
<td width="50%" style="vertical-align:top;padding-right:10px;">
<p style="margin:0 0 6px 0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${BRAND.muted};">Nombre</p>
<p style="margin:0;font-size:16px;font-weight:600;color:${BRAND.text};">${n}</p>
</td>
<td width="50%" style="vertical-align:top;padding-left:10px;">
<p style="margin:0 0 6px 0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${BRAND.muted};">Correo</p>
<p style="margin:0;font-size:15px;"><a href="${mailHref}" style="color:${BRAND.accent};font-weight:600;text-decoration:none;">${c}</a></p>
</td>
</tr>
</table>
<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background:${BRAND.surface};border-radius:12px;border:1px solid #e9d5ff;margin-bottom:8px;">
<tr>
<td style="padding:20px 22px;">
<p style="margin:0 0 14px 0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${BRAND.accent};">Mensaje</p>
<div>${mHtml}</div>
</td>
</tr>
</table>
<p style="margin:16px 0 0 0;font-size:12px;color:${BRAND.muted};line-height:1.5;">Respondé directamente a <a href="${mailHref}" style="color:${BRAND.accent};font-weight:600;">${c}</a> para continuar la conversación.</p>
</td>
</tr>
<tr>
<td style="padding:16px 28px 24px 28px;background:#fafafa;border-top:1px solid #f4f4f5;">
<p style="margin:0;font-size:12px;color:#a1a1aa;text-align:center;">Generado automáticamente desde el formulario de contacto del portfolio.</p>
</td>
</tr>
</table>
</td>
</tr>
</table>
</body>
</html>`;
}

function ownerNotificationText(nombre: string, correo: string, asunto: string, mensaje: string): string {
	return `[Portfolio — Nuevo contacto]

Asunto: ${asunto}

Nombre: ${nombre}
Correo: ${correo}

--- Mensaje ---
${mensaje}

---
Responder a: ${correo}`;
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

	try {
		await Promise.all([
			transporter.sendMail({
				from,
				to: correoStr,
				subject: `Gracias por escribirme — ${BRAND.name}`,
				text: thankYouEmailText(nombreStr),
				html: thankYouEmailHtml(nombreStr)
			}),
			transporter.sendMail({
				from,
				to: notifyTo,
				replyTo: correoStr,
				subject: `[Portfolio] ${asuntoStr}`,
				text: ownerNotificationText(nombreStr, correoStr, asuntoStr, mensajeStr),
				html: ownerNotificationHtml(nombreStr, correoStr, asuntoStr, mensajeStr)
			})
		]);
	} catch (e) {
		console.error('SMTP sendMail:', e);
		throw error(502, 'No se pudo enviar el correo');
	}

	return json({ ok: true });
};
