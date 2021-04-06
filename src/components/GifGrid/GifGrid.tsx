import { Grid } from '@giphy/react-components';
import React, { useState } from 'react';
import ResizeObserver from 'react-resize-observer';

interface Props {
	fetchGifs: React.ComponentProps<typeof Grid>['fetchGifs'];
	onGifClick?: React.ComponentProps<typeof Grid>['onGifClick'];
}

const GifGrid = ({ fetchGifs, onGifClick = undefined }: Props) => {
	const [width, setWidth] = useState(window.innerWidth);
	return (
		<>
			<Grid
				onGifClick={onGifClick}
				fetchGifs={fetchGifs}
				width={width}
				columns={3}
				gutter={6}
			/>
			<ResizeObserver
				onResize={({ width: w }) => {
					setWidth(w);
				}}
			/>
		</>
	);
};

export default GifGrid;
