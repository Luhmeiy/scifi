import type { Location } from './location';
import type { IMap } from './map';

export interface Galaxy {
	map: IMap;
	locations: Location[];
}
