export interface Location {
	id: string;
	name: string;
	details: string;
	type: 'star' | 'planet' | 'station';
	position: { x: number; y: number };
}
