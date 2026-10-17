<script lang="ts">
	import NavbarButton from './navbarButton.svelte';

	const newMap = () => console.log('New map');
	const save = () => console.log('Save');
	const load = () => console.log('Load');

	const onKeyDown = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'n':
				newMap();
				break;
			case 's':
				save();
				break;
			case 'l':
				load();
				break;
		}
	};
</script>

<nav class="border-2">
	<NavbarButton title="[N] New map" onClick={newMap} />
	<NavbarButton title="[S] Save" onClick={save} />
	<NavbarButton title="[L] Load" onClick={load} />
</nav>

<svelte:window on:keydown={onKeyDown} />
