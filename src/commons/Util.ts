export const clearText = (original: string) =>
	original
		.replace(/(<([^>]+)>)/gi, '')
		.replace(/'/g, '')
		.replace(/"/g, '')
		.trim();

export const onlyNumbers = (s: string) => s.replace(/[^0-9.]/g, '');

export const mountUrl = (base: string, filter: any) => `${base}${filter}`;
