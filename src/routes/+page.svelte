<script>
	import HeaderWrapper from '$lib/HeaderWrapper.svelte';
	import ContentWrapper from '$lib/ContentWrapper.svelte';
	import Footer from '$lib/Footer.svelte';
	import LinkButton from '$lib/LinkButton.svelte';
	import ActivityBox from '$lib//fixers/ActivityBox.svelte';
	import Card from '$lib//fixers/Card.svelte';
</script>

<svelte:head>
	<!-- TODO title -->
	<title>VIDEO / COMMERCIAL / EDITORIAL / FILM</title>
</svelte:head>

<HeaderWrapper title="VIDEO / COMMERCIAL / EDITORIAL / FILM">
	<p class="lead unbounded">
		Check out our <LinkButton href="#reels" yellow={true}>vertical videos</LinkButton> too!
	</p>
</HeaderWrapper>
<ContentWrapper blackOnWhite={true}>
	<img src="countries/Poland.svg" />
	<img src="countries/Czechia.svg" />
	<img src="countries/crimea_disputed.svg" />
</ContentWrapper>
<ContentWrapper>
	<div class="row py-5">
		<div class="col-6">
			<p class="lead fw-bold unbounded">
				Find the perfect spots for your shoots right in the heart of Europe! From beautiful mountain
				peaks, to green valleys, fairylike chateaux and castles, historical towns, industrial
				complexes or contemporary architecture, all just a quick drive from each other.
			</p>
		</div>
		<div class="col-6 roboto">
			<p>
				Interested? We can help you find the right locations while securing all permits, equipment,
				services, translations and staff you might need at your shoot. Contact us and let the
				production begin!
			</p>
		</div>
	</div>
	<div class="row">
		<Card
			label="CZECH REPUBLIC"
			thumbnail="cz.jpg"
			last="col-md-6"
			desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Etiam bibendum elit eget erat. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero."
			id="0"
		/>
		<Card
			label="SLOVAKIA"
			thumbnail="sk.jpg"
			last="col-md-6"
			desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Etiam bibendum elit eget erat. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero."
			id="1"
		/>
		<Card
			label="AUSTRIA"
			thumbnail="au.jpg"
			desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam in lorem sit amet leo accumsan lacinia. Sed elit dui, pellentesque a, faucibus vel, interdum nec, diam. Etiam bibendum elit eget erat. In laoreet, magna id viverra tincidunt, sem odio bibendum justo, vel imperdiet sapien wisi sed libero."
			id="2"
		/>
	</div>
	<h2 class="unbounded text-center display-4 mt-5 pt-5">WHAT WE OFFER AS FIXERS</h2>
	<p class="roboto text-center py-4 fw-light">
		Local production service on Czech Republic / Slovakia / Austria & throughout Europe
	</p>
	<div class="grid-container pb-5">
		<ActivityBox value="HIRING HIGH QUALITY CREWS" />
		<ActivityBox value="LOCATION SCOUTING AND RESEARCH" />
		<ActivityBox value="LOCATION CLEARANCES AND RELEASES" />
		<ActivityBox value="SECURING SHOOTING PERMITS" />
		<ActivityBox value="COMMUNICATIONS WITH " />
		<ActivityBox value="LOCAL AUTHORITIES" />
		<ActivityBox value="PRODUCTION SCHEDULING, BUDGETING & LOGISTICS " />
		<ActivityBox value="STUDIOS" />
		<ActivityBox value="GEAR RENTAL" />
		<ActivityBox value="DRONE RENTAL" />
		<ActivityBox value="VEHICLE RENTAL AND INSURANCE" />
		<ActivityBox value="CATERING SERVICES" />
		<ActivityBox value="CASTING AND BOOKING" />
		<ActivityBox value="HOTEL BOOKINGS" />
		<ActivityBox value="ON SET TRANSLATION" />
		<ActivityBox value="SECURING ART DEPARTMENT, HAIR MAKEUP ETC" />
	</div>
</ContentWrapper>
<ContentWrapper blackOnWhite={true}>
	<div class="row py-5">
		<div class="col-4">
			<h2 class="unbounded">WHO WE ARE</h2>
		</div>
		<div class="col-8">
			<p class="roboto fw-light">
				Lorem ipsum dolor sit amet, consectetuer adipiscing elit. In convallis. Fusce aliquam
				vestibulum ipsum. Maecenas ipsum velit, consectetuer eu lobortis ut, dictum at dui. Nullam
				dapibus fermentum ipsum. Vestibulum erat nulla, ullamcorper nec, rutrum non, nonummy ac,
				erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis
				egestas. Integer pellentesque quam vel velit. Nullam dapibus fermentum ipsum. Etiam quis
				quam. Duis condimentum augue id magna semper rutrum. Proin pede metus, vulputate nec,
				fermentum fringilla, vehicula vitae, justo. Nulla non lectus sed nisl molestie malesuada.
				Nullam sit amet magna in magna gravida vehicula. Duis condimentum augue id magna semper
				rutrum. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Et harum quidem
				rerum facilis est et expedita distinctio. Etiam quis quam. Curabitur ligula sapien, pulvinar
				a vestibulum quis, facilisis vel sapien. Pellentesque ipsum.
			</p>
			<p class="roboto fw-light">
				Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos.
				Nam sed tellus id magna elementum tincidunt. Et harum quidem rerum facilis est et expedita
				distinctio. Aliquam erat volutpat. Curabitur ligula sapien, pulvinar a vestibulum quis,
				facilisis vel sapien. Nullam dapibus fermentum ipsum. Duis ante orci, molestie vitae
				vehicula venenatis, tincidunt ac pede. Aliquam ante. Pellentesque habitant morbi tristique
				senectus et netus et malesuada fames ac turpis egestas. Duis aute irure dolor in
				reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Class aptent
				taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Aliquam erat
				volutpat.
			</p>
		</div>
	</div>
	<Footer />
</ContentWrapper>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		gap: 1rem;
	}
</style>
