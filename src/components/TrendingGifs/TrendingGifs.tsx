import { Grid } from '@giphy/react-components';
import { getTrendingGifs } from 'api';
import GifGrid from 'components/GifGrid';
import React from 'react';

interface Props {
	onGifClick?: React.ComponentProps<typeof Grid>['onGifClick'];
}

const TrendingGifs = ({ onGifClick = undefined }: Props) => {
	return <GifGrid fetchGifs={getTrendingGifs} onGifClick={onGifClick} />;
};

export default TrendingGifs;
