import { GiphyFetch, SearchOptions } from '@giphy/js-fetch-api';

// use @giphy/js-fetch-api to fetch gifs, instantiate with your api key
const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_API_KEY);

const getTrendingGifs = (offset: number, limit = 10) =>
	gf.trending({ offset, limit });

const searchImages = (term: string, options?: SearchOptions) =>
	gf.search(term, options);

export { getTrendingGifs, searchImages };
