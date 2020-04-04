<template>
	<div class="carousel">
		<div class="carouselCardsWrapper" id="carouselCardsWrapper">
			<div class="carouselCards" id="carouselCards">
				<carouselCard-item
					class="carousel-card"
					v-for="card in cards"
					:key="card.id"
					:card="card"
				/>
			</div>
		</div>
		<div class="carousel-nav">
			<img
				class="nav-left"
				src="../assets/icons/SVG/chevron-left.svg"
				alt="left arrow"
				@click="moveCarousel(-1)"
				:disabled="headOfList"
				v-if="arrowsNeeded"
			/>
			<img
				src="../assets/icons/SVG/chevron-right.svg"
				alt=""
				class="nav-right"
				@click="moveCarousel(1)"
				:disabled="endOfList"
				v-if="arrowsNeeded"
			/>
		</div>
	</div>
</template>

<script>
import CarouselCard from "@/components/CarouselCard";
export default {
	components: {
		"carouselCard-item": CarouselCard,
	},
	data() {
		return {
			cards: [
				{
					id: 0,
					title: "Utilities",
					imagepath: "icons/SVG/drop.svg",
					description: "icon of water droplet",
				},
				{
					id: 1,
					title: "Education",
					imagepath: "icons/SVG/graduation-hat.svg",
					description: "icon of graduation hat",
				},
				{
					id: 2,
					title: "Phone Billing",
					imagepath: "icons/SVG/phone-handset.svg",
					description: "icon of phone",
				},
				{
					id: 3,
					title: "Internet Billing",
					imagepath: "icons/SVG/laptop.svg",
					description: "icon of laptop",
				},
				{
					id: 4,
					title: "Housing",
					imagepath: "icons/SVG/apartment.svg",
					description: "icon of apartment",
				},
				{
					id: 5,
					title: "Pest",
					imagepath: "icons/SVG/bug.svg",
					description: "icon of bug",
				},
			],
			offset: 0,
			paginationFactor: null,
			carouselSize: null,
			arrowsNeeded: null,
		};
	},
	mounted() {
		this.getPaginationFactor();
		this.getCarouselSize();
		this.getArrowsNeeded();
	},
	computed: {
		headOfList() {
			return this.offset === 0;
		},
		endOfList() {
			return (
				this.offset <=
				this.paginationFactor * -1 * (this.cards.length - this.carouselSize)
			);
		},
	},
	methods: {
		moveCarousel(direction) {
			if (direction === 1 && !this.endOfList) {
				this.offset -= this.paginationFactor;
			} else if (direction === -1 && !this.headOfList) {
				this.offset += this.paginationFactor;
			}
			document.getElementById("carouselCards").style.transform =
				"translateX(" + this.offset + "px)";
			document.getElementById("carouselCards").style.transition =
				"0.7s ease-in-out";
		},
		getCarouselSize() {
			let carouselCardsWidth = document.getElementById("carouselCardsWrapper")
				.offsetWidth;
			this.carouselSize = carouselCardsWidth / this.paginationFactor;
		},
		getPaginationFactor() {
			let carouselCard = document.getElementsByClassName("carousel-card")[0];
			let style = window.getComputedStyle
				? getComputedStyle(carouselCard, null)
				: carouselCard.currentStyle;

			let marginLeft = parseInt(style.marginLeft) || 0;
			let marginRight = parseInt(style.marginRight) || 0;
			this.paginationFactor =
				carouselCard.offsetWidth + marginLeft + marginRight;
		},
		getArrowsNeeded() {
			this.arrowsNeeded = this.carouselSize < this.cards.length;
		},
	},
	created() {
		window.addEventListener("resize", () => {
			this.getPaginationFactor();
			this.getCarouselSize();
			this.getArrowsNeeded();
		});
	},
	destroyed() {
		window.removeEventListener("resize", () => {
			this.getPaginationFactor();
			this.getCarouselSize();
			this.getArrowsNeeded();
		});
	},
	watch: {
		arrowsNeeded: function () {
			if (!this.arrowsNeeded) {
				document.getElementById("carouselCardsWrapper").style =
					"justify-content: center";
			} else {
				document.getElementById("carouselCardsWrapper").style =
					"justify-content: initial";
			}
		},
	},
};
</script>

<style scoped>
.carousel {
	min-height: 30vh;
	display: grid;
}
.carouselCardsWrapper {
	overflow: hidden;
	display: grid;
}
.carouselCards {
	display: flex;
	flex-direction: row;
	margin: 0 2em;
}
.carousel-card {
	min-width: 200px;
	min-height: 200px;

	/* margin: 1em 1.3em; */
	margin: 25px;
	border-radius: 1em;
}
.nav-left[disabled],
.nav-right[disabled] {
	opacity: 0.2;
	cursor: initial;
}
.nav-left,
.nav-right {
	width: 30px;
	align-self: center;
	justify-self: center;
	cursor: pointer;
	margin: 0 0.5em;
}
.carousel-nav {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2em 0;
}
</style>
