<script>
	export let hideOnSm = false;
	export let href = '/';
</script>

<a class={hideOnSm ? 'd-none d-md-inline' : ''} {href}>
	<slot />
</a>

<style>
	a {
		font-family: 'Unbounded', cursive;
		text-decoration: none;
		color: var(--white);
		background-color: rgba(70,70,70,.3);

		padding: 1em 2rem 1em 2em;
		border: 1px solid var(--yellow);

		transition: all ease-in-out 0.25s;

		pointer-events: all;
	}

	a:hover {
		color: var(--black);
		background-color: var(--yellow);
		padding: 1.2em 2.2em 1.2em 2.2em;
	}
</style>
