<script>
	import LinkButton from "$lib/LinkButton.svelte";
</script>

<div id="overlay-navbar" class="d-flex flex-row align-items-center">
	<a href="/"><div id="logo"/></a>
	<div class="container-fluid" />
	<LinkButton href="/videos" classes="px-1 px-md-3">VIDEOS</LinkButton>
	<LinkButton href="/events" classes="px-1 px-md-3">EVENTS</LinkButton>
	<LinkButton href="/contact" classes="px-1 px-md-3">CONTACT</LinkButton>
</div>

<style>
	#overlay-navbar {
		height: 10%;
	}

	#logo {
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url('/logo.png');
		position: relative;
		top: 1vh;
		left: 1vw;
		height: 5rem;
		width: 5rem;
	}
</style>
