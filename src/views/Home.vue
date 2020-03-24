<template>
	<div class="container">
		<div class="hero">
			<img
				src="@/assets/images/undraw_real_time_collaboration_c62i.svg"
				alt=""
			/>
			<div class="hero-text">
				<h1>
					Any problem that you can't solve? <br />
					<span class="tealtext">We can help you with that!</span>
				</h1>
				<p>
					Our agents are equipped with the skills to deal with a variety of
					issues. <br />
					Talk to them to find out more!
				</p>
				<button class="btn-primary">Chat Now</button>
			</div>
		</div>
		<div class="description">
			<!-- About Us Write Up -->
			<!-- 1 sentence to describe the company -> Your one stop consultant for common household problems ...  -->
			<!-- Years of experience, goals blah blah -->
			<!-- Cards -> Types of problems that the company handles, no. of positive feedback, no. of agents -->
			<img src="../assets/images/undraw_team_work_k80m.svg" alt="team" />
			<h2>About <span class="salmontext">OneStopQuery</span></h2>
			<p>
				We aim to be your one stop consultant for all your common problems. We
				have been operating since 2015 and has been solving a variety of
				requests since then.
			</p>
			<div class="statistics">
				<AnimatedNumber class="descriptionnumber" id="stat1num" :value="5" />
				<span class="descriptiontext" id="stat1text">years</span>
				<AnimatedNumber class="descriptionnumber" id="stat2num" :value="40" />
				<span class="descriptiontext" id="stat2text">agents</span>
				<AnimatedNumber
					class="descriptionnumber"
					id="stat3num"
					:value="95678"
				/>
				<span class="descriptiontext" id="stat3text"
					>resolved <br />
					problems</span
				>
				<AnimatedNumber
					class="descriptionnumber"
					id="stat4num"
					:value="10000"
				/>
				<span class="descriptiontext" id="stat4text"
					>registered <br />
					users</span
				>
			</div>
		</div>
		<div class="carousel">
			<!-- carousel with each category  -->
		</div>
		<div class="calltoaction">
			<!-- probably a form or some sort linking to similar to the chat now page -->
		</div>
	</div>
</template>

<script>
import AnimatedNumber from "@/components/AnimatedNumber";
export default {
	components: { AnimatedNumber }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Oswald&display=swap");
.container {
	display: grid;
	grid-template-areas:
		"hero"
		"description"
		"carousel"
		"calltoaction";
}
.hero {
	display: grid;
	grid-template-areas:
		"hero-image"
		"hero-text";
	align-items: center;
	justify-items: center;
	padding: 2em 1.5em;
}
.hero img {
	width: 100%;
	padding: 1em;
	grid-area: hero-image;
}
.hero-text {
	grid-area: hero-text;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	width: 90%;
}
.hero-text p {
	margin-bottom: 1.5em;
}
.hero-text h1 {
	margin-bottom: 0.5em;
}

.btn-primary {
	padding: 0.8em 1.5em;
	background: var(--teal);
	border-radius: 2em;
	border: none;
	box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.1);
	font-size: 1.2rem;
	font-weight: bold;
	color: white;
	transition: background 0.3s ease;
	cursor: pointer;
}
.btn-primary:hover {
	background: grey;
}

.tealtext {
	color: var(--teal);
}

.description {
	background: var(--lightgrey);
	padding: 2em 1.5em;
	display: grid;
	grid-template-areas:
		"descriptionimage"
		"descriptionheader"
		"descriptiontext"
		"statistics";
}
.description img {
	width: 100%;
	padding: 1em;
	grid-area: descriptionimage;
	align-self: center;
}
.description h2 {
	grid-area: descriptionheader;
	padding: 0.5em 1rem;
	align-self: center;
}
.description p {
	grid-area: descriptiontext;
	padding: 0 1rem;
}
.salmontext {
	color: var(--salmon);
}
.statistics {
	display: grid;
	grid-template-areas:
		"stat1num stat2num"
		"stat1text stat2text"
		"stat3num stat4num"
		"stat3text stat4text";
	padding: 1em 0;
	grid-area: statistics;
	gap: 0 1em;
	grid-template-columns: 1fr 1fr;
}

#stat1num {
	grid-area: stat1num;
}
#stat2num {
	grid-area: stat2num;
}
#stat3num {
	grid-area: stat3num;
}
#stat4num {
	grid-area: stat4num;
}
#stat1text {
	grid-area: stat1text;
}
#stat2text {
	grid-area: stat2text;
}
#stat3text {
	grid-area: stat3text;
}
#stat4text {
	grid-area: stat4text;
}

.descriptionnumber {
	font-family: "Oswald", sans-serif;
	font-size: 3rem;
	text-align: center;
	margin-bottom: 0.7rem;
	color: var(--salmon);
}
.descriptiontext {
	text-transform: uppercase;
	text-align: center;
}
#stat1text,
#stat2text {
	margin-bottom: 1.2em;
}

/* Media Query */
@media screen and (min-width: 768px) {
	.hero {
		grid-template-areas: "hero-text hero-image";
		grid-template-columns: 1fr 1fr;
	}
	.description {
		grid-template-areas:
			"descriptionimage descriptionheader"
			"descriptionimage descriptiontext"
			"descriptionimage statistics";
		grid-template-columns: 1fr 1fr;
	}
	.description h2,
	.description p {
		text-align: center;
		width: 85%;
		justify-self: center;
	}
	.description h2,
	.description p,
	.statistics {
		padding: 0 2em;
	}
	.description h2 {
		padding-bottom: 0.7em;
		align-self: flex-end;
	}
}
</style>
