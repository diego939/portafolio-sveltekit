import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const THEME_STORAGE_KEY = 'portfolio-theme';

function readStoredDark(): boolean {
	if (!browser) return false;

	try {
		return localStorage.getItem(THEME_STORAGE_KEY) === 'dark';
	} catch {
		return false;
	}
}

function applyTheme(isDark: boolean) {
	if (!browser) return;

	const root = document.documentElement;

	root.classList.toggle('dark', isDark);
	root.style.colorScheme = isDark ? 'dark' : 'light';

	try {
		localStorage.setItem(
			THEME_STORAGE_KEY,
			isDark ? 'dark' : 'light'
		);
	} catch {
		/* ignore */
	}
}

const initialDark = readStoredDark();

export const darkMode = writable(initialDark);

if (browser) {
	applyTheme(initialDark);
}

export function toggleDarkMode(): void {
	darkMode.update((isDark) => {
		const next = !isDark;

		applyTheme(next);

		return next;
	});
}

