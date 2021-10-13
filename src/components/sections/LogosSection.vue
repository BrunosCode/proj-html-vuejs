<template>
  <section class="c-section">
    <div class="l-container">
      <div class="l-row l-spaceAround h-my--4">
        <div v-for="(logo, i) in content.logos" :key="i" 
        class="c-logo">
          <img v-if="logo.img" :src="require(`../../assets/images/${logo.img}`)" :alt="logo.alt"
          class="c-testimonial__img">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LogosSection',
  props: {
    content: Object
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables.scss";
@import "../../assets/style/mixins.scss";


</style>
