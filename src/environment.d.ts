declare global {
	namespace NodeJS {
		interface ProcessEnv {
			REACT_APP_GIPHY_API_KEY: string;
		}
	}
}

export {};
