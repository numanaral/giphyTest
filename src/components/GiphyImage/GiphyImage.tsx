interface Props {
	id: string;
	url: string;
	alt: string;
	[key: string]: any;
}

const GiphyImage: React.FC<Props> = ({ id, url, alt }) => {
	return <img id={id} src={url} alt={alt} />;
};

export type { Props };
export default GiphyImage;
