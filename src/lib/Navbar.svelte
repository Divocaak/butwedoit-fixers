<script>
	import LinkButton from '$lib/LinkButton.svelte';
</script>

<div id="overlay-navbar" class="row d-flex flex-row align-items-center">
	<div class="col-5"><a href="/" id="logo-container" class="float-start"><div /></a></div>
	<div class="col-7">
		<div class="row">
			<div class="col"><LinkButton href="/#countries" classes="px-1 px-md-3">Countries&nbsp;we&nbsp;operate</LinkButton></div>
			<div class="col"><LinkButton href="/#offer" classes="px-1 px-md-3">What&nbsp;we&nbsp;offer</LinkButton></div>
			<div class="col"><LinkButton href="#who" classes="px-1 px-md-3">Who&nbsp;we&nbsp;are</LinkButton></div>
			<div class="col"><LinkButton href="#contact" classes="px-1 px-md-3">Contact</LinkButton></div>
		</div>
	</div>
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
