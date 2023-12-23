<script>
	export let title, top, left;
	export let hidden = false;
</script>

<div class="capital-wrapper" style="top:{top}px; left:{left}px" class:hidden>
	<p class="unbounded capital-title">{title}</p>
	<div class="point" />
</div>

<style>
	.capital-wrapper {
		position: relative;
		width: fit-content;
		pointer-events: none;
	}

	.point {
		position: relative;
		left: 50%;
		width: 7.5px;
		height: 7.5px;
		border-radius: 50%;
		background-color: var(--yellow);
		-webkit-box-shadow: 0px 0px 0px 3.75px rgba(249, 210, 4, 0.5);
		-moz-box-shadow: 0px 0px 0px 3.75px rgba(249, 210, 4, 0.5);
		box-shadow: 0px 0px 0px 3.75px rgba(249, 210, 4, 0.5);
		z-index: 2;
		pointer-events: all;
	}

	.capital-title {
		position: relative;
		opacity: 0;
		z-index: 2;
		top: 0px;
		pointer-events: none;
		transition: all 0.15s ease-in-out;
	}

	.capital-wrapper:hover .capital-title {
		opacity: 1;
		top: 10px;
	}

	.hidden {
		opacity: 0 !important;
		pointer-events: none !important;
	}
</style>
