<script>
	import Navbar from '$lib/Navbar.svelte';
	export let title = '';
	export let imagePath = null;
	export let hideMedia = false;
	export let isCountry = false;
	export let iconName = 'eu';
</script>

<div class="header-wrapper" class:fixed={!hideMedia}>
	{#if !hideMedia}
		<img src={imagePath} alt="thumbnail" />
	{/if}
	<div class="header-overlay p-4" class:background={hideMedia} class:fixed={!hideMedia}>
		<Navbar {isCountry} {iconName} />
		{#if !hideMedia}
			<div class="overlay-content d-flex align-items-center">
				<div class="text-center w-100">
					<h1 class="display-1 text-uppercase unbounded">{title}</h1>
					<slot />
				</div>
			</div>
		{:else}
			<slot />
		{/if}
	</div>
</div>

<style>
	.header-wrapper {
		min-height: 100vh;
	}

	.header-wrapper,
	img {
		object-fit: cover;
		position: fixed;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}

	.header-wrapper .header-overlay {
		z-index: 2;
		width: 100%;
		height: 100%;
		color: var(--white);
		background-color: rgba(0, 0, 0, 0.5);
	}

	.header-wrapper .overlay-content {
		height: 90%;
	}

	.background {
		background-color: var(--black) !important;
		color: var(--black) !important;
	}

	.fixed {
		position: fixed;
		top: 0;
	}
</style>
