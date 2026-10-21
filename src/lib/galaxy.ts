import { writable } from 'svelte/store';
import { generateGalaxy } from './generate';

export const galaxy = writable(generateGalaxy());
export const regenerateGalaxy = () => galaxy.set(generateGalaxy());
