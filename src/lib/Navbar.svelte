<script>
	import LinkButton from '$lib/LinkButton.svelte';
	import FramedButton from '$lib/FramedButton.svelte';

	export let isCountry = false;
	export let iconName = "eu";
</script>

<div id="overlay-navbar" class="row d-flex flex-row align-items-center">
	<div class="col-5"><a href="/" id="logo-container" class="float-start"><div style="background-image: url('/navbarLogos/{iconName}.png');"/></a></div>
	<div class="col-7 d-block d-md-none">
		{#if isCountry}
			<LinkButton href="/#countries" classes="d-block w-100 text-end"
				>Countries&nbsp;we&nbsp;operate</LinkButton
			>
			<LinkButton href="/#offer" classes="d-block w-100 text-end">What&nbsp;we&nbsp;offer</LinkButton>
			<LinkButton href="#who" classes="d-block w-100 text-end">Who&nbsp;we&nbsp;are</LinkButton>
			<div class="d-block w-100 text-end mt-3">
				<FramedButton href="#contact">Contact</FramedButton>
			</div>
		{:else}<FramedButton href="#contact">Contact</FramedButton>{/if}
	</div>
	<div class="col-7 d-none d-md-block">
		<div class="row">
			<div class="col">
				<LinkButton href="/#countries" classes="px-1 px-md-3"
					>Countries&nbsp;we&nbsp;operate</LinkButton
				>
			</div>
			<div class="col">
				<LinkButton href="/#offer" classes="px-1 px-md-3">What&nbsp;we&nbsp;offer</LinkButton>
			</div>
			<div class="col">
				<LinkButton href="#who" classes="px-1 px-md-3">Who&nbsp;we&nbsp;are</LinkButton>
			</div>
			<div class="col">
				<LinkButton href="#contact" classes="px-1 px-md-3">Contact</LinkButton>
			</div>
		</div>
	</div>
</div>

<style>
	#overlay-navbar {
		position: relative;
		z-index: 2;
		height: fit-content;
	}

	#logo-container {
		position: relative;
		left: 0;
	}

	#logo-container div {
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		top: 1vh;
		left: 1vw;
		height: 5rem;
		width: 5rem;
	}
</style>
