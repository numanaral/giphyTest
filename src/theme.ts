import { createGlobalStyle } from 'styled-components';

const theme = {
	palette: {
		background: {
			primary: 'var(--primary-background)',
			secondary: 'var(--secondary-background)',
		},
		color: {
			primary: 'var(--primary-color)',
			secondary: 'var(--secondary-color)',
			error: 'var(--error-color)',
			warning: 'var(--warning-color)',
			success: 'var(--success-color)',
			info: 'var(--info-color)',
			default: 'var(--default-color)',
		},
	},
	shape: {
		borderRadius: 'var(--border-radius)',
		padding: 'var(--padding)',
	},
};

const GlobalStyles = createGlobalStyle`
	/* #region THEME */
	:root {
		/* Colors */
		--primary-background: #303030;
		--secondary-background: #424242;

		--primary-color: #2196f3;
		--secondary-color: #e91e63;
		
		--error-color: #f44336;
		--warning-color: #ff9800;
		--info-color: #2196f3;
		--success-color: #4caf50;
		--default-color: #9e9e9e;

		/* Utilities */
		--border-radius: 4px;
		--padding: 10px;
	}
	/* #endregion */

	/* #region GENERICS */
	*, ::before, ::after {
		box-sizing: border-box;
	}

	html,
	body,
	#root {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
	}

	html {
		background-color: ${theme.palette.background.primary};
		/* color: #fff; */
	}

	#root {
		position: relative;
	}

	pre {
		white-space: pre-wrap;
		word-wrap: break-word;
	}
	/* #endregion */

	/* #region SCROLLBARS */
	*, ::before, ::after {
		scroll-behavior: smooth;
		scrollbar-color: black transparent;
		scrollbar-width: thin;
	}

	/* width */
	::-webkit-scrollbar {
		width: 5px;
		height: 6px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: #bfbfbf;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: black;
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: rgba(0, 0, 0, 0.7);
	}
	/* #endregion */
`;

export { GlobalStyles };
export default theme;
