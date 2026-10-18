<script lang="ts">
	import type { Location } from '../interfaces/location';

	let { location, openId = $bindable() }: { location?: Location; openId?: string } = $props();

	let isOpen = $derived(location && location.id === openId);

	const toggleOpen = () => (isOpen ? (openId = undefined) : (openId = location?.id));

	const getIcon = () => {
		switch (location?.type) {
			case 'star':
				return '*';
			case 'planet':
				return '@';
			case 'station':
				return '#';
		}
	};
</script>

<button
	class="h-8 w-8 border border-zinc-900 duration-200 hover:border-2 hover:border-white"
	class:cursor-pointer={location}
	class:border-2!={isOpen}
	class:border-red-500!={isOpen}
	onclick={toggleOpen}
	aria-label="block"
>
	<span class:animate-pulse={location?.type == 'star'}>{getIcon()}</span>
</button>
