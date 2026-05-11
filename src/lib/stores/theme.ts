import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const THEME_STORAGE_KEY = 'portfolio-theme';

function readStoredDark(): boolean {
	if (!browser) return false;
	try {
		const s = localStorage.getItem(THEME_STORAGE_KEY);
		if (s === 'dark') return true;
		if (s === 'light') return false;
	} catch {
		/* ignore */
	}
	return false;
}

export const darkMode = writable(false);

if (browser) {
	darkMode.set(readStoredDark());
	darkMode.subscribe((isDark) => {
		document.documentElement.classList.toggle('dark', isDark);
		try {
			localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
		} catch {
			/* ignore */
		}
	});
}

export function toggleDarkMode(): void {
	darkMode.update((v) => !v);
}
