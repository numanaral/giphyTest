declare type StyledProps<T, Keys> = {
	[Property in keyof Pick<T, Keys> as `$${string & Property}`]: T[Property];
};

/**
 * Get the keys of the object as a type
 *
 * @example
 * ```ts
 * const AXIS = {
 * 	X: 'xVal',
 * 	Y: 'yVal',
 * };
 *
 * // 'X' | 'Y'
 * KeysOf<typeof AXIS>
 * ```
 */
declare type KeysOf<T> = keyof T;

/**
 * Get the values of the object with const assertion as a type.
 * - `{} as const`
 * - `<const>{}`
 * - `[] as const`
 * - `<const>[]`
 *
 * @example
 * ```ts
 * // note the "as const"
 * const AXIS = {
 * 	X: 'xVal',
 * 	Y: 'yVal',
 * } as const;
 *
 * // 'xVal' | 'yVal'
 * ValuesOf<typeof AXIS>
 *
 * const NUMBERS = [1, 2] as const;
 * // 1 | 2
 * ValuesOf<typeof NUMBERS>
 * ```
 */
declare type ValuesOf<T> = Exclude<T[KeysOf<T>], Function>;
