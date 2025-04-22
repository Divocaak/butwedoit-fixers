<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Footer from '$lib/Footer.svelte';
	import ActivityBox from '$lib//ActivityBox.svelte';
	import Card from '$lib/Card.svelte';
	import HomeMap from '$lib/maps/HomeMap.svelte';
	import FramedButton from '$lib/FramedButton.svelte';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	/* import { analyticsStore } from '$lib/stores/analyticsStore.js';

	const submitHandler = async () => {
		analyticsStore.update((existing_events) => [
			...existing_events,
			{
				id: 'form_sent',
				type: 'event'
			}
		]);
	}; */

	onMount(() => {
		if (typeof window !== 'undefined' && !window.grecaptcha) {
			const script = document.createElement('script');
			script.src = 'https://www.google.com/recaptcha/api.js';
			script.async = true;
			script.defer = true;
			document.head.appendChild(script);
		}
	});
</script>

<svelte:head>
	<title>EUROPE FIXERS</title>
</svelte:head>

<HeaderWrapper hideMedia={true}>
	<HomeMap />
	<div class="map-overlay-container mx-0 mx-md-3">
		<h2 class="unbounded">CENTRAL EU</h2>
		<h1 class="display-3 unbounded fw-bold pt-0 pt-md-3 pb-4">LOCAL<br />FIXER</h1>
		<FramedButton hideOnSm={true} href="#info"
			>FIND OUT
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="16"
				fill="currentColor"
				class="bi bi-arrow-right ms-2"
				viewBox="0 4 16 8"
			>
				<path
					fill-rule="evenodd"
					d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
				/>
			</svg></FramedButton
		>
	</div>
	<a href="https://butwedoit.cz/" target="_blank" class="powered-by-container d-none d-md-inline">
		<p class="unbounded lead me-3">POWERED BY</p>
		<img alt="butwedoit logo" src="/logo_bwd.png" />
	</a>
	<div class="form-wrapper">
		<form action="https://api.staticforms.xyz/submit" method="post">
			<!-- <form action="https://api.staticforms.xyz/submit" method="post" on:submit|preventDefault={submitHandler}> -->
			<input type="hidden" name="accessKey" value="e2895bab-92ae-40ff-85b5-a3b5835d66ac" />
			<input type="text" name="honeypot" style="display: none;" />
			<input type="hidden" name="redirectTo" value={$page.url.href} />
			<input
				type="email"
				class="montserrat"
				name="email"
				required
				placeholder="more information: email"
			/>
			<button type="submit">submit</button>
			<div
				class="g-recaptcha"
				id="g-racaptcha-staticforms"
				data-sitekey="6Lcn5wIrAAAAABYQX58CrdmpWc9VUoxea0L4xRBX"
			/>
		</form>
	</div>
</HeaderWrapper>
<ContentWrapper gradient={true} noPadding={true}>
	<div class="row mt-5 py-5 px-3 px-md-5" id="info">
		<div class="col-md-6 col-12">
			<p class="lead fw-bold unbounded text-uppercase" style="font-size:1.9rem;">
				we can Find the perfect spots for your shoots right in the heart of Europe!
			</p>
		</div>
		<div class="col-md-6 col-12 roboto">
			<p>
				Interested? From beautiful mountain peaks, to green valleys, fairylike chateaux and castles,
				historical towns, industrial complexes or contemporary architecture, all just a quick drive
				from each other.
			</p>
			<p>
				We can help you find the right locations while securing all permits, equipment, services,
				translations and staff you might need at your shoot. Contact us and let the production
				begin!
			</p>
		</div>
	</div>
	<div class="row" id="countries">
		<Card
			label="CZECH REPUBLIC"
			thumbnail="/cards/cz.jpg"
			last="col-md-6"
			desc="Nestled in the heart of Europe, with a rich history and diverse landscape, filming locations are easily accessible due to their central location. Cities showcase well-preserved historical sites, UNESCO-listed castles, and modern architecture."
			id="0"
		/>
		<Card
			label="SLOVAKIA"
			thumbnail="/cards/sk.jpg"
			last="col-md-6"
			desc="Presents a rich variety of filming locations, Slovakia features the breathtaking High Tatras, medieval castles, quaint villages, and modern urban areas. The country's diverse landscapes, including rolling hills, pristine lakes, and dense forests, offer filmmakers a range of options for their creative vision."
			id="1"
			offsetY={-350}
			offsetYSm={-175}
		/>
		<Card
			label="AUSTRIA"
			thumbnail="/cards/au.jpg"
			last="col-md-6"
			desc="Unfolds a spectacular array of film locations to productions of all scales. The dramatic allure of its mountain peaks and alpine forests sets the stage for breathtaking scenes, while serene lakes and captivating cityscapes add to the diversity of options. Vienna, the capital, stands out as a filmmaker's dream, combining classic baroque architecture with modern design and a unique cultural blend."
			id="2"
		/>
		<Card
			label="HUNGARY"
			thumbnail="/cards/hu.jpg"
			last="col-md-6"
			desc="We're currently in progress and gearing up to open our new office soon. Please contact us directly if you need a fixer in Hungary."
			id="3"
			noClick={true}
		/>
	</div>
	<h2 class="unbounded text-center display-4 mt-5 pt-5" id="offer">WHAT WE OFFER AS FIXERS</h2>
	<p class="roboto text-center py-4 fw-light">
		Local production service in the Czech Republic / Slovakia / Austria & throughout Europe
	</p>
	<div class="grid-container pb-5 px-3 px-md-0">
		<ActivityBox value="HIRING HIGH QUALITY CREWS" />
		<ActivityBox value="LOCATION SCOUTING AND RESEARCH" />
		<ActivityBox value="LOCATION CLEARANCES AND RELEASES" />
		<ActivityBox value="SHOOTING PERMITS SECURING" />
		<ActivityBox value="COMMUNICATIONS WITH LOCAL AUTHORITIES" />
		<ActivityBox value="COSTUME & WARDROBE SERVICES" />
		<ActivityBox value="PRODUCTION SCHEDULING, BUDGETING & LOGISTICS" />
		<ActivityBox value="STUDIOS" />
		<ActivityBox value="GEAR RENTAL" />
		<ActivityBox value="DRONE RENTAL" />
		<ActivityBox value="VEHICLE RENTAL AND INSURANCE" />
		<ActivityBox value="CATERING SERVICES" />
		<ActivityBox value="CASTING AND BOOKING" />
		<ActivityBox value="HOTEL BOOKINGS" />
		<ActivityBox value="ON SET TRANSLATION" />
		<ActivityBox value="SECURING ART DEPARTMENT, HAIR AND MAKEUP" />
	</div>
</ContentWrapper>
<ContentWrapper blackOnWhite={true}>
	<div class="row py-5 px-3 px-md-0" id="who">
		<div class="col-md-4 col-12">
			<h2 class="unbounded">WHO WE ARE</h2>
		</div>
		<div class="col-md-8 col-12">
			<p class="roboto fw-light">
				We are a small team from Prague ready to help you with great projects! Starting as
				videomakers specializing in the field of commercials, we operate on the Czech, Slovakian and
				Austrian market for 6+ years and are ready to enter new locations. In our portfolio, we have
				over 600 finished video projects and 50+ shootings or events which we have secured with our
				production services. We work with local and international clients always ensuring to deliver
				the best solutions available and are always ready for the challenges to come!
			</p>
			<p class="roboto fw-light">
				Looking for a fixer for your new project in Europe? Reach out to us!
			</p>
		</div>
	</div>
	<Footer />
</ContentWrapper>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(4, minmax(15rem, 1fr));
		gap: 1rem;
	}

	.map-overlay-container {
		position: absolute;
		z-index: 2;
		color: var(--white);
		top: 200px;
		pointer-events: none;
	}

	.powered-by-container {
		position: absolute;
		z-index: 2;
		color: var(--white);
		top: 110px;
		right: 70px;
	}

	.powered-by-container p {
		display: inline-block;
	}

	.powered-by-container img {
		display: inline-block;
		height: 100px;
		width: auto;
	}

	#info {
		z-index: 10;
	}

	.form-wrapper {
		position: relative;
		width: 100%;
		height: 90%;
		pointer-events: none;
		z-index: 0;
	}

	form {
		position: absolute;
		bottom: 0;
		z-index: 10;
		text-align: center;
		width: 100%;
		margin: auto;
	}

	form button {
		all: unset;
		background: var(--yellow);
		color: var(--black);
		transition: all 0.1s ease-in-out;
		cursor: pointer;
	}

	form button:hover {
		background-color: var(--white);
		border: solid 2px var(--white);
	}

	form input,
	form button {
		padding: 0.8rem 2rem;
		border: solid 2px var(--yellow);
		text-transform: uppercase;
		font-family: 'Unbounded', cursive;
		pointer-events: all;
		font-size: 1rem;
		line-height: 1rem;
	}

	form input {
		background-color: transparent;
		width: 40%;
		color: var(--white);
		transition: all 0.1s ease-in-out;
	}

	form input[type='email']:focus {
		outline: 2px solid var(--yellow);
	}

	form input::placeholder {
		color: var(--yellow);
	}

	form #g-racaptcha-staticforms {
		transform: scale(0.7);
		pointer-events: all !important;
		position: absolute;
		width: min-content;
		bottom: -10px;
		right: -10px;
	}

	/* Media query for screens smaller than 768px (e.g., smartphones) */
	@media screen and (max-width: 767px) {
		.grid-container {
			grid-template-columns: repeat(1, 1fr);
		}

		.map-overlay-container {
			top: 150px;
		}

		form {
			display: flex;
			flex-direction: column;
			bottom: 20%;
		}

		form input {
			width: 100%;
		}

		form input,
		form button {
			text-align: center;
			font-size: 0.9rem;
			line-height: 0.8rem;
		}

		form #g-racaptcha-staticforms {
			position: absolute;
			bottom: -70px;
			left: 0;
		}
	}

	/* Media query for screens between 768px and 991px (e.g., tablets) */
	@media screen and (min-width: 768px) and (max-width: 991px) {
		.grid-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
</style>
