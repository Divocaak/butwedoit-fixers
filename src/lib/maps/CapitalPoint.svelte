<script>
	export let title, top, left;
</script>

<div class="capital-wrapper" style="top:{top}px; left:{left}px">
	<p class="unbounded capital-title">{title}</p>
	<div class="point" />
</div>

<style>
	.capital-wrapper {
		position:relative;
		width: fit-content;
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
	}

	.capital-title {
        position: relative;
        z-index: 2;
	}
</style>
