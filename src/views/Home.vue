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
				<animatedNumber-item
					class="descriptionnumber"
					id="stat1num"
					:value="5"
				/>
				<span class="descriptiontext" id="stat1text">years</span>
				<animatedNumber-item
					class="descriptionnumber"
					id="stat2num"
					:value="40"
				/>
				<span class="descriptiontext" id="stat2text">agents</span>
				<animatedNumber-item
					class="descriptionnumber"
					id="stat3num"
					:value="95678"
				/>
				<span class="descriptiontext" id="stat3text"
					>resolved <br />
					problems</span
				>
				<animatedNumber-item
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
		<div class="categories">
			<div class="categories__wrapper">
				<h2>
					We are equipped with the skills to handle a variety of problems
				</h2>
				<carousel-item />
			</div>
		</div>
		<div class="howitworks">
			<h2 class="howitworks__header">How it works</h2>
			<div class="howitworks__content">
				<img
					src="@/assets/images/undraw_sign_in_e6hj.svg"
					alt=""
					class="howitworks__content__step1img howitworks__content__stepimg"
				/>
				<h3 class="howitworks__content__step1h">
					Sign Up or use a Guest Account
				</h3>
				<p class="howitworks__content__step1p">
					We only need your email if you're signing up. You can also choose to
					use a guest account.
				</p>
				<img
					src="@/assets/icons/SVG/arrow-down-circle.svg"
					alt=""
					class="howitworks__content__step1arrow howitworks__content__arrow"
				/>
				<img
					src="@/assets/images/undraw_fill_forms_yltj.svg"
					alt=""
					class="howitworks__content__step2img howitworks__content__stepimg"
				/>
				<h3 class="howitworks__content__step2h">Describe the problem</h3>
				<p class="howitworks__content__step2p">
					Indicate the type of problem you are facing on the form and click
					submit.
				</p>
				<img
					src="@/assets/icons/SVG/arrow-down-circle.svg"
					alt=""
					class="howitworks__content__step2arrow howitworks__content__arrow"
				/>
				<img
					src="@/assets/images/undraw_chat_1wo5.svg"
					alt=""
					class="howitworks__content__step3img howitworks__content__stepimg"
				/>
				<h3 class="howitworks__content__step3h">Talk to your assigned agent</h3>
				<p class="howitworks__content__step3p">
					Our agent will help you solve your problem.
				</p>
			</div>
		</div>
		<div class="calltoaction">
			<img
				src="@/assets/images/undraw_chatting_2yvo.svg"
				alt=""
				class="calltoaction__image"
			/>
			<div class="calltoaction__content">
				<h2 class="calltoaction__content__text">
					What are you waiting for? <br />
					Chat with us now and let us help you!
				</h2>
				<button class="calltoaction__content__button btn-primary">
					Talk to Us Now
				</button>
			</div>
			<!-- probably a form or some sort linking to similar to the chat now page -->
		</div>
	</div>
</template>

<script>
import AnimatedNumber from "@/components/AnimatedNumber";
import Carousel from "@/components/Carousel";
export default {
	components: {
		"animatedNumber-item": AnimatedNumber,
		"carousel-item": Carousel,
	},
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

.categories {
	background-color: var(--lightgrey);
	padding: 1em;
}
.categories__wrapper {
	border-radius: 1em;
	background-color: #ffd9c6;
}

.categories h2 {
	text-align: center;
	padding: 1.5em 5%;
}

.howitworks {
	background-color: var(--lightgrey);
	padding: 0 1.5em;
}

.howitworks__header {
	text-align: center;
	padding: 1em 0;
}

.howitworks__content {
	display: grid;
	grid-template-areas:
		"step1image"
		"step1header"
		"step1para"
		"step1arrow"
		"step2image"
		"step2header"
		"step2para"
		"step2arrow"
		"step3image"
		"step3header"
		"step3para";
	justify-items: center;
	text-align: center;
	padding: 0 0 3em 0;
}

.howitworks__content__step1img {
	grid-area: step1image;
}
.howitworks__content__step2img {
	grid-area: step2image;
}
.howitworks__content__step3img {
	grid-area: step3image;
}
.howitworks__content__step1h {
	grid-area: step1header;
}
.howitworks__content__step2h {
	grid-area: step2header;
}
.howitworks__content__step3h {
	grid-area: step3header;
}
.howitworks__content__step1p {
	grid-area: step1para;
}
.howitworks__content__step2p {
	grid-area: step2para;
}
.howitworks__content__step3p {
	grid-area: step3para;
}
.howitworks__content__step1arrow {
	grid-area: step1arrow;
}
.howitworks__content__step2arrow {
	grid-area: step2arrow;
}

.howitworks__content .howitworks__content__stepimg {
	width: 50%;
}
.howitworks__content .howitworks__content__arrow {
	width: 20px;
	margin: 1.5em 0;
}
.howitworks__content h3 {
	padding: 0.5em;
}
.howitworks__content p {
	padding: 0 1em;
}

.calltoaction {
	display: grid;
	grid-template-areas:
		"calltoactionimage"
		"calltoactioncontent";
	background-color: white;
	align-items: center;
	justify-items: center;
	padding: 2em 1.5em;
}

.calltoaction .calltoaction__image {
	width: 100%;
	padding: 1em;
	grid-area: calltoactionimage;
}

.calltoaction__content {
	grid-area: calltoactioncontent;
	display: grid;
	align-items: center;
	justify-items: center;
	grid-template-areas:
		"calltoactiontext"
		"calltoactionbutton";
	gap: 1.5em 0;
	padding: 1em 0;
}

.calltoaction__content__text {
	grid-area: calltoactiontext;
	text-align: center;
}

.calltoaction__content__button {
	grid-area: calltoactionbutton;
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
	.howitworks__content {
		display: grid;
		grid-template-areas:
			"step1image step1arrow step2image step2arrow step3image"
			"step1header . step2header . step3header"
			"step1para . step2para . step3para";
		align-items: center;
		grid-template-columns: 1fr auto 1fr auto 1fr;
	}
	.howitworks__content .howitworks__content__arrow {
		transform: rotate(-90deg);
		margin: 0 1em;
	}

	.howitworks__content .howitworks__content__stepimg {
		width: 60%;
	}

	.howitworks__content p {
		align-self: start;
	}
	.howitworks__content h3 {
		padding: 1em;
	}

	.calltoaction {
		grid-template-areas: "calltoactionimage calltoactioncontent";
		grid-template-columns: 1fr 1fr;
	}
}
</style>
