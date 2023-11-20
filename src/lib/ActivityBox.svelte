<script>
	export let value;
</script>

<div class="d-flex align-items-center item">
	<div id="top-left" class="corner" />
	<div id="top-right" class="corner" />
	<div id="bottom-right" class="corner" />
	<div id="bottom-left" class="corner" />
	<div class="text-center w-100">
		<p class="unbounded">{value}</p>
	</div>
</div>

<style>
	:root {
		/* the size on the corner */
		--s: 15px;
		/* the thickness of the border */
		--t: 1px;
		/* the gap between the border and image */
		--g: 30px;
	}

	.item {
		position: relative;
		padding: calc(var(--g) + var(--t));
		background-image: linear-gradient(var(--yellow), var(--yellow));
		background-position: 100% 100%;
		background-repeat: no-repeat;
		background-size: 0% 0%;
		transition: all 0.4s;
	}

	.corner {
		position: absolute;
		width: var(--s);
		height: var(--s);
	}

	#top-left {
		top: 0;
		left: 0;
		border-top: var(--t) solid var(--yellow);
		border-left: var(--t) solid var(--yellow);
	}

	#top-right {
		top: 0;
		right: 0;
		border-top: var(--t) solid var(--yellow);
		border-right: var(--t) solid var(--yellow);
	}

	#bottom-right {
		bottom: 0;
		right: 0;
		border-bottom: var(--t) solid var(--yellow);
		border-right: var(--t) solid var(--yellow);
	}

	#bottom-left {
		bottom: 0;
		left: 0;
		border-bottom: var(--t) solid var(--yellow);
		border-left: var(--t) solid var(--yellow);
	}

	.item:hover {
		background-size: 100% 100%;
		color: var(--black);
	}
</style>
