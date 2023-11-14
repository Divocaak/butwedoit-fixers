<script>
	import LinkButton from '$lib/LinkButton.svelte';
</script>

<div id="overlay-navbar" class="d-flex flex-row align-items-center clearfix">
	<a href="/" id="logo-container" class="float-start"><div /></a>
	<div class="container-fluid" />
	<LinkButton href="/#countries" classes="px-1 px-md-3">Countries&nbsp;we&nbsp;operate</LinkButton>
	<LinkButton href="/#offer" classes="px-1 px-md-3">What&nbsp;we&nbsp;offer</LinkButton>
	<LinkButton href="#who" classes="px-1 px-md-3">Who&nbsp;we&nbsp;are</LinkButton>
	<LinkButton href="#contact" classes="px-1 px-md-3">Contact</LinkButton>
</div>

<style>
	#overlay-navbar {
		position: relative;
		z-index: 2;
		height: 10%;
	}

	#logo-container {
		position: relative;
		left: 0;
	}

	#logo-container div {
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		background-image: url('/logo_bwd.png');
		position: relative;
		top: 1vh;
		left: 1vw;
		height: 5rem;
		width: 5rem;
	}
</style>
