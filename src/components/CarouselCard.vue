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
	props: ["card"]
};
</script>

<style scoped>
.card-container {
	display: grid;
	grid-template-areas:
		"image"
		"text";
	grid-template-rows: 7fr 3fr;
	transition: box-shadow 1s ease-in-out;
	box-shadow: 10px 10px 20px #ebb096, -10px -10px 20px #ffceb0;
}
.card-container:hover {
	box-shadow: inset 10px 10px 20px #ebb096, inset -10px -10px 20px #ffceb0;
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
