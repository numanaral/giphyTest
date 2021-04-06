import axios from 'axios';
import ENDPOINTS from './endpoints';

const giphyAPI = axios.create({
	baseURL: 'http://api.giphy.com/v1/gifs/',
	params: {
		api_key: process.env.REACT_APP_GIPHY_API_KEY,
	},
});

const getTrendingImages = (count = 10) => {
	return giphyAPI.get(ENDPOINTS.TRENDING, {
		params: {
			limit: count,
		},
	});
};

export { getTrendingImages };
