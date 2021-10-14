<template>
  <section :class="`h-bg--${content.bg}`" class="c-section">
    <div class="l-container">
      <SectionIntro :content="content" />

      <div class="l-row l-wrap l-spaceAround l-alignCenter h-my--4">
        <div v-for="(logo, i) in content.logos" :key="i" 
        class="c-logo h-m--2">
          <a :href="logo.link" :alt="logo.alt">
            <img v-if="logo.img" :src="require(`../../assets/images/${logo.img}`)" :alt="logo.alt"
            class="c-testimonial__img">
          </a>
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
