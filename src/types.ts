export interface MovieMember {
	name: string;
	filmography: FilmographyItem[];
}

export enum Role {
	Director,
	Actor,
}

export interface FilmographyItem {
	movie: Movie;
	roles: Role[];
}

export interface Ranking {
	listName: string;
	position: number;
}

export interface Movie {
	slug: string; // id
	title: string;
	description: string;
	crew: MovieMember[]; // hum
	rankings: Array<Ranking>;
}

export interface IMDBSelector {
	title: string;
	anchor: string;
}

export enum OrderBy {
	ASC = 'asc',
	DESC = 'desc',
}

export interface Site {
	name: 'string';
	baseUrl: string;
	orderBy: OrderBy;
}

export const IMDB = {
	baseUrl: 'https://www.imdb.com/search/title/?groups=',
	orderBy: OrderBy.DESC,
};

export const AvailableFilters: Array<IMDBSelector> = [
	{ title: 'Popularity', anchor: 'top_1000' },
	{ title: 'A-Z', anchor: 'top_1000&sort=alpha,desc' },
	{ title: 'User Rating', anchor: 'top_1000&sort=user_rating,desc' },
	{ title: 'Number of Votes', anchor: 'top_1000&sort=num_votes,desc' },
	{ title: 'US Box Office', anchor: 'top_1000&sort=boxoffice_gross_us,desc' },
	{ title: 'Runtime', anchor: 'top_1000&sort=runtime,desc' },
	{ title: 'Year', anchor: 'top_1000&sort=year,desc' },
	{ title: 'Release Date', anchor: 'top_1000&sort=release_date,desc' },
	{ title: 'Date of Your Rating', anchor: 'top_1000&sort=your_rating_date,desc' },
	{ title: 'Your Rating', anchor: 'top_1000&sort=my_ratings,desc' },
];
