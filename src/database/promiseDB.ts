import { readFileSync, writeFileSync, existsSync } from 'fs';

const DB_PATH = './db.json';

// TODO
export const createDB = () => {
	if (!existsSync(DB_PATH)) {
		writeFileSync(DB_PATH, JSON.stringify([]));
	}
};

// TODO
export const updateDB = (newData: any) => {
	writeFileSync(DB_PATH, JSON.stringify(newData));
};

// TODO
export const getMovies = () => {
	const data = readFileSync(DB_PATH, 'utf-8');
	return JSON.parse(data);
};

// TODO
export const getMovie = (filters: any) => {
	const data = readFileSync(DB_PATH, 'utf-8');
	return JSON.parse(data);
};

// TODO
export const movieExists = (movie: any) => false;

// TODO
export const saveMovie = (movie: any) => {
	if (!movieExists(movie)) {
		const data = getMovies();
		data.push(movie);
		updateDB(data);
	}
};
