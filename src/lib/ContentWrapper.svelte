<script>
	export let blackOnWhite = false;
	export let gradient = false;
	export let noPadding = false;
</script>

<div
	class="content-wrapper {!noPadding ? 'px-md-5' : ''}"
	class:white-on-black={!blackOnWhite}
	class:black-on-white={blackOnWhite}
	class:gradient-background={gradient}
>
	<slot />
</div>

<style>
	.content-wrapper {
		position: relative;
		top: 100vh;
		min-height: 90vh;
		overflow: hidden;
	}

	.gradient-background {
		background: linear-gradient(
			0deg,
			rgba(0, 0, 0, 1) 0%,
			rgba(0, 0, 0, 1) 90%,
			rgba(0, 0, 0, 0) 100%
		) !important;
	}
</style>
