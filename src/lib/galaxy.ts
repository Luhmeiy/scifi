import { writable } from 'svelte/store';
import { generateGalaxy } from './generate';
import type { Location } from '../interfaces/location';

export const galaxy = writable(generateGalaxy());
export const regenerateGalaxy = () => galaxy.set(generateGalaxy());

export const deleteLocation = (id: string) => {
	galaxy.update((g) => ({
		...g,
		locations: g.locations.filter((l) => l.id !== id)
	}));
};

export const updateLocation = (id: string, patch: Partial<Location>) => {
	galaxy.update((g) => ({
		...g,
		locations: g.locations.map((l) => (l.id === id ? { ...l, ...patch } : l))
	}));
};
