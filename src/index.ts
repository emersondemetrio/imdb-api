import puppeteer from 'puppeteer';
import { mountUrl } from './commons/Util';
import { init } from './crawler/crawler';
import { BROWSER_SETUP, PAGE_LAYOUT_SETUP } from './setup';
import { AvailableFilters, IMDB } from './types';

(async (site: string) => {
	try {
		const browser = await puppeteer.launch(BROWSER_SETUP);
		const page = await browser.newPage();

		await page.setViewport(PAGE_LAYOUT_SETUP);

		const context = browser.defaultBrowserContext();

		await context.overridePermissions(site, ['geolocation']);

		await init(page, site);

		await browser.close();
	} catch (error) {
		console.error('Error:', error);
	} finally {
		console.log('Finishing.');
		process.exit(0);
	}
})(mountUrl(IMDB.baseUrl, AvailableFilters[0].anchor));
