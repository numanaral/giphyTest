import Container from 'components/Container';
import GifLoader from 'components/GifLoader';
import { GlobalStyles } from 'theme';

const App = () => {
	return (
		<>
			<Container>
				<GifLoader />
			</Container>
			<GlobalStyles />
		</>
	);
};

export default App;
