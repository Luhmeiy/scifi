import type { Galaxy } from '../interfaces/galaxy';

export const isGalaxy = (value: unknown): value is Galaxy => {
	if (typeof value !== 'object' || value === null) return false;
	const g = value as Galaxy;
	return (
		typeof g.map?.height === 'number' &&
		typeof g.map?.width === 'number' &&
		Array.isArray(g.locations)
	);
};
