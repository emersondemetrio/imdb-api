import { WaitForOptions } from 'puppeteer';

export const BROWSER_SETUP = {
	// headless: false,
	// devtools: true,
	args: ['--start-fullscreen'],
};

export const PAGE_LAYOUT_SETUP = {
	width: 1900,
	height: 1700,
};

export const TIMEOUT_FOR_NEXT_RUN = 2000;

export const DISABLE_TIMEOUT_SETUP: WaitForOptions = {
	waitUntil: 'load',
	timeout: 0,
};
