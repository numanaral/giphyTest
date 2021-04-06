import { Gif } from '@giphy/react-components';
import { searchImages } from 'api';
import GifGrid from 'components/GifGrid';
import TrendingGifs from 'components/TrendingGifs';
import React, { useEffect, useState } from 'react';

import Modal from 'react-modal';
import styled from 'styled-components';
import theme from 'theme';
import './GifLoader.scss';

const Wrapper = styled.div`
	background-color: ${theme.palette.background.secondary};
`;

interface Props {}
interface SearchProps {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Search = ({ onChange }: SearchProps) => {
	return (
		<div style={{ textAlign: 'center', margin: '10px 0' }}>
			Search For Images
			<br />
			<input onChange={onChange} />
		</div>
	);
};

interface ResultModalProps {
	isOpen: boolean;
	gif: any;
	onClose: (
		event:
			| React.MouseEvent<Element, MouseEvent>
			| React.KeyboardEvent<Element>
	) => void;
}

const ResultModal = ({ isOpen, gif, onClose }: ResultModalProps) => {
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel="Example Modal"
		>
			<div style={{ width: '100%', textAlign: 'center' }}>
				<Gif gif={gif} width={500} style={{ textAlign: 'center' }} />
				<pre>{JSON.stringify(gif, null, '\t')}</pre>
			</div>
		</Modal>
	);
};

const GifLoader = ({}: Props) => {
	const [searchKeyword, setSearchKeyword] = useState('');
	const [clickedGif, setClickedGif] = useState({});
	const [isOpen, setIsOpen] = React.useState(false);

	// const onSearch = (e: KeyboardEvent) => {
	const onSearch = async (e: any) => {
		const keyword = e.target.value.trim();
		if (!keyword) return;
		setSearchKeyword(keyword);
	};

	// const onGifClick = ((gif: IGif, e: React.SyntheticEvent<HTMLElement, Event>) => void) => {
	const onGifClick: (
		gif: any,
		e: React.SyntheticEvent<HTMLElement, Event>
	) => void = (gif, e) => {
		e.preventDefault();
		setClickedGif(gif);
		setIsOpen(true);
	};

	const onClose = () => {
		setIsOpen(false);
	};

	useEffect(() => {
		Modal.setAppElement('#modalPlaceholder');
	}, []);

	return (
		<Wrapper>
			<Search onChange={onSearch} />
			<ResultModal isOpen={isOpen} gif={clickedGif} onClose={onClose} />
			<div id="modalPlaceholder" />
			{(!!searchKeyword && (
				<GifGrid
					key={searchKeyword}
					fetchGifs={(offset: number) =>
						searchImages(searchKeyword, { offset })
					}
					onGifClick={onGifClick}
				/>
			)) || <TrendingGifs onGifClick={onGifClick} />}
		</Wrapper>
	);
};

export default GifLoader;
