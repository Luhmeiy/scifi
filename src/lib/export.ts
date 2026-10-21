import type { Galaxy } from '../interfaces/galaxy';

const pad = (n: number) => n.toString().padStart(2, '0');

export const exportGalaxy = (galaxy: Galaxy) => {
	const data = JSON.stringify(galaxy, null, 2);
	const blob = new Blob([data], { type: 'application/json' });
	const url = URL.createObjectURL(blob);

	const date = new Date();
	const timestamp = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}-${pad(date.getHours())}-${pad(date.getMinutes())}`;
	const fileName = `galaxy.${timestamp}.json`;

	const a = document.createElement('a');
	a.href = url;
	a.download = fileName;
	a.click();

	URL.revokeObjectURL(url);
};
