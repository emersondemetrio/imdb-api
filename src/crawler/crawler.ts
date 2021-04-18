import { Page } from 'puppeteer';

const clear = (t: string) => {
	if (!t) {
		return '';
	}

	return t
		.trim()
		.replace(/\n/g, '')
		.replace(/\s{2,}/g, ' ');
};

const scrapAll = async (page: Page): Promise<Array<any>> => {
	return await page.evaluate(() => {
		return Array.from(document.querySelectorAll('h3.lister-item-header'), e => ({
			title: e.textContent,
			listName: 'IMDb "Top 1000" (Sorted by Date of Your Rating Ascending)',
		}));
	});
};

export const init = async (page: Page, destination: string) => {
	await page.goto(destination);

	const results = await scrapAll(page);

	results.forEach(element => {
		// console.log(clear(element));
		console.log(element);
	});
};
