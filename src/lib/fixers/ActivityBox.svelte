<script>
	export let value;
</script>

<div class="d-flex align-items-center corners">
	<div class="text-center w-100">
		<p class="unbounded">{value}</p>
	</div>
</div>

<style>
	.corners {
		/* the size on the corner */
		--s: 15px;
		/* the thickness of the border */
		--t: 1px;
		/* the gap between the border and image */
		--g: 30px;

		padding: calc(var(--g) + var(--t));
		outline: var(--t) solid var(--yellow);
		outline-offset: calc(-1 * var(--t));
		mask: conic-gradient(at var(--s) var(--s), #0000 75%, #000 0) 0 0 / calc(100% - var(--s))
				calc(100% - var(--s)),
			linear-gradient(#000 0 0) content-box;
		-webkit-mask: conic-gradient(at var(--s) var(--s), #0000 75%, #000 0) 0 0 /
				calc(100% - var(--s)) calc(100% - var(--s)),
			linear-gradient(#000 0 0) content-box;
	}
</style>
