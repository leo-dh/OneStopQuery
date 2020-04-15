<template>
  <div class="comingsoon">
    <h1>
      Coming Soon
    </h1>
    <img src="@/assets/icons/SVG/cog.svg" alt="" class="comingsoon__image" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 1em;
}
.comingsoon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  flex-direction: column;
}
.comingsoon__image {
  width: 70px;
  filter: invert(20%) sepia(62%) saturate(333%) hue-rotate(167deg)
    brightness(88%) contrast(88%);
}
</style>
