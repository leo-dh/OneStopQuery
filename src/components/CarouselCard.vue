<template>
	<div class="card-container">
		<img
			:src="require(`@/assets/${card.imagepath}`)"
			:alt="card.imagedescription"
		/>
		<h3>{{ card.title }}</h3>
	</div>
</template>

<script>
export default {
	props: ["card"],
};
</script>

<style scoped>
.card-container {
	display: grid;
	grid-template-areas:
		"image"
		"text";
	grid-template-rows: 7fr 3fr;
	transition: box-shadow 0.2s ease-in-out;
	box-shadow: 10px 10px 20px #ebc8b6, -10px -10px 20px #ffead6,
		inset 0 0 0 transparent, inset 0 0 0 transparent;
}
.card-container:hover {
	box-shadow: 0 0 0 transparent, 0 0 0 transparent, inset 10px 10px 20px #ebc8b6,
		inset -10px -10px 20px #ffead6;
}

.card-container h3::after {
	content: "";
	display: block;
	border-radius: 3em;
	background: transparent;
	width: auto;
	transform: scaleX(0);
	opacity: 0.6;
	margin-top: 5px;
	height: 3px;
	transition: ease 0.4s;
}

.card-container:hover h3::after {
	background-color: #2c3e50;
	transform: scaleX(1);
}

img {
	padding: 5%;
	width: 50%;
	color: white;
	align-self: center;
	justify-self: center;
	filter: invert(20%) sepia(62%) saturate(333%) hue-rotate(167deg)
		brightness(88%) contrast(88%);
}
h3 {
	align-self: center;
	justify-self: center;
}
</style>
