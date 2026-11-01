export const LOCATION_TYPES = ['star', 'planet', 'station'] as const;
export type LocationType = (typeof LOCATION_TYPES)[number];

export interface Location {
	id: string;
	name: string;
	details: string;
	type: LocationType;
	position: { x: number; y: number };
}
