type BaseColorVariant = 'primary' | 'secondary';
type AlertColorVariant = 'error' | 'success' | 'warning' | 'info';
type DefaultColorVariant = 'default';
type ColorVariants = BaseColorVariant | AlertColorVariant | DefaultColorVariant;

type BaseSize = 'small' | 'medium' | 'large';

export type {
	BaseColorVariant,
	AlertColorVariant,
	DefaultColorVariant,
	ColorVariants,
	BaseSize,
};
