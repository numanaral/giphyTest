import styled from 'styled-components';
import theme from 'theme';

const Wrapper = styled.div`
	background-color: ${theme.palette.background.secondary};
`;

interface Props {}

const GifLoader = ({}: Props) => {
	return (
		<Wrapper>
			<p>GifLoader</p>
		</Wrapper>
	);
};

export default GifLoader;
