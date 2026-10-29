import { writable } from 'svelte/store';
import { generateGalaxy } from './generate';

export const galaxy = writable(generateGalaxy());
export const regenerateGalaxy = () => galaxy.set(generateGalaxy());

export const deleteLocation = (id: string) => {
	galaxy.update((g) => ({
		...g,
		locations: g.locations.filter((l) => l.id !== id)
	}));
};
