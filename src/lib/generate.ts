import type { Location } from '../interfaces/location';
import type { Map } from '../interfaces/map';

const generateMap = (): Map => {
	const max = 30;
	const min = 15;

	return {
		height: Math.floor(Math.random() * (max - min + 1) + min),
		width: Math.floor(Math.random() * (max - min + 1) + min)
	};
};

const generateLocation = (x: number, y: number): Location => {
	const types = ['star', 'planet', 'station'];
	const randomType = types[Math.floor(Math.random() * types.length)] as Location['type'];

	return {
		id: crypto.randomUUID(),
		name: `${randomType}`,
		details: 'Lorem ipsum',
		type: randomType,
		position: { x, y }
	};
};

export const generateGalaxy = (): { map: Map; locations: Location[] } => {
	const map = generateMap();
	const mapSize = map.height * map.width;

	const locationsDensity = 10;
	const locationsNumber = Math.floor(mapSize / locationsDensity);

	const locations: Location[] = [];
	const occupied = new Set<string>();

	for (let i = 0; i < locationsNumber; i++) {
		const randomX = Math.floor(Math.random() * map.width);
		const randomY = Math.floor(Math.random() * map.height);

		const key = `${randomX},${randomY}`;
		if (occupied.has(key)) continue;
		occupied.add(key);

		const location = generateLocation(randomX, randomY);
		locations.push(location);
	}

	return { map, locations };
};
