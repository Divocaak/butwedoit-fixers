<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Roboto:wght@300;400;500&family=Unbounded:wght@400;500;700;800&display=swap"
		rel="stylesheet"
	/>
	<link
		rel="stylesheet"
		href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
	/>
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp"
		crossorigin="anonymous"
	/>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N"
		crossorigin="anonymous"
	></script>
	<!-- TODO change meta desc -->
	<meta
		name="description"
		content="BUT WE DO IT is a video agency & production service company. Let Us Create Amazing Commercials & Turn Them Into Leads. Crafted Scripts, Production and Advertising for Online & TV. Covers everything from film permits and location scout services to local production support."
	/>
</svelte:head>
<!-- NOTE https://docs.google.com/document/d/1Ut2c5l4DWJn8IUjsVpHnYjzhRNfpnjmlBhJm33PFIlo/edit -->
<!-- TODO delete unused widgets/components -->
<!-- TODO compress imgs -->
<slot />

<style lang="scss">
	:root {
		--black: black;
		--white: white;
		--yellow: #f9d204;
	}

	:global(html) {
		scroll-behavior: smooth;
	}

	:global(body) {
		background-color: var(--black);
		color: var(--white);
	}

	:global(.montserrat) {
		font-family: 'Montserrat', sans-serif;
	}

	:global(.roboto) {
		font-family: 'Roboto', sans-serif;
	}

	:global(.unbounded) {
		font-family: 'Unbounded', cursive;
	}

	/* TODO is used? */
	:global(.black-on-white) {
		color: var(--black);
		background-color: var(--white);
	}

	:global(.white-on-black) {
		color: var(--white);
		background-color: var(--black);
	}
</style>
