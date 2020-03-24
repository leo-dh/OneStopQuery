<template>
	<span ref="num">
		{{ animatedValue }}
	</span>
</template>

<script>
import TWEEN from "@tweenjs/tween.js";

export default {
	props: {
		value: {
			type: Number,
			required: true
		}
	},
	data() {
		return {
			animatedValue: 0,
			observer: null
		};
	},
	watch: {
		value(newValue, oldValue) {
			this.tween(oldValue, newValue);
		}
	},
	mounted() {
		this.observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					this.tween(0, this.value);
				}
			},
			{ threshold: 0.5 }
		);
		this.observer.observe(this.$refs.num);
	},
	methods: {
		tween(startValue, endValue) {
			let vm = this;
			function animate() {
				if (TWEEN.update()) {
					requestAnimationFrame(animate);
				}
			}
			new TWEEN.Tween({ animatedValue: startValue })
				.to({ animatedValue: endValue }, 500)
				.onUpdate(function() {
					vm.animatedValue = this._object.animatedValue.toFixed(0);
				})
				.start();

			animate();
		}
	}
};
</script>
