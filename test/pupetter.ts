const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://www.imdb.com/search/title/?groups=top_1000&sort=your_rating_date,asc');
	await page.screenshot({ path: 'example.png' });

	await browser.close();
})();
