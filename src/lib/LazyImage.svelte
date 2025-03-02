<script>
	import { onMount } from 'svelte';
	import { FxReveal as Img } from '@zerodevx/svelte-img';

	export let path;
	export let alt = '';
	export let additionalClasses = '';
	export let offsetY = 0;
	export let offsetYSm = 0;

	const src = {
		sources: {
			webp: [
				{ src: path, w: 1920 },
				{ src: path, w: 1024 },
				{ src: path, w: 480 }
			],
			jpeg: [
				{ src: path, w: 1920 },
				{ src: path, w: 1024 },
				{ src: path, w: 480 }
			]
		},
		img: { src: path, w: 1920, h: 1080 }
	};

	let ref, loaded;
	onMount(() => {
		if (ref.complete) loaded = true;
	});

	let innerWidth = 0;
	$: condition = innerWidth < 800;
</script>

<svelte:window bind:innerWidth/>

<div class="wrap">
	<!-- <Img
		{src}
		{alt}
		class="my-img offsetter {additionalClasses}"
		style="top:{condition ? offsetYSm : offsetY}px; "
		bind:ref
		on:load={() => (loaded = true)}
	/> -->
	<div class="blur" class:loaded />
</div>

<style>
	:globa(.my-img) {
		--reveal-transform: scale(1.02);
		--reveal-transition: opacity 1s ease-in, transform 0.8s ease-out;
		--reveal-filter: blur(20px);
	}

	:global(.offsetter) {
		position: relative;
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.wrap {
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 1;
	}

	.blur {
		position: absolute;
		inset: 0;
		backdrop-filter: blur(20px);
		pointer-events: none;
	}

	.loaded {
		display: none;
	}
</style>
