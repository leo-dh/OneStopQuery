<template>
	<div class="container">
		<div class="hero">
			<img
				src="@/assets/images/undraw_real_time_collaboration_c62i.png"
				alt=""
			/>
			<div class="hero-text">
				<h1>
					Any problems? <br />
					Talk to us now!
				</h1>
				<button class="btn-primary">Chat Now</button>
			</div>
			<div class="description">
				<!-- About Us Write Up -->
				<!-- 1 sentence to describe the company -> Your one stop consultant for common household problems ...  -->
				<!-- Years of experience, goals blah blah -->
				<!-- Cards -> Types of problems that the company handles, no. of positive feedback, no. of agents -->
			</div>
			<div class="carousel">
				<!-- carousel with each category  -->
			</div>
			<div class="calltoaction">
				<!-- probably a form or some sort linking to similar to the chat now page -->
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
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
}
.hero img {
	width: 100%;
	grid-area: hero-image;
}
.hero-text {
	grid-area: hero-text;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.btn-primary {
	padding: 1em 2em;
	background: lightblue;
	border-radius: 2em;
	border: none;
	box-shadow: 1em;
	font-size: 1.2rem;
	font-weight: bold;
}
.hero-text > * {
	margin: 0.5em 0;
}
/* Media Query */
@media screen and (min-width: 768px) {
	.hero {
		grid-template-areas: "hero-text hero-image";
		grid-template-columns: 1fr 1fr;
	}
}
</style>
