<template>
  <section class="c-section">
    <div class="l-container">
      <SectionIntro :content="content" />
                
      <div class="l-row">
        <div v-for="(testimonial, i) in content.testimonials" :key="i" 
        class="l-col l-col--1third l-alignCenter c-testimonial h-p--4">
          <img v-if="testimonial.img" :src="require(`../../assets/images/${testimonial.img}`)" :alt="testimonial.name"
          class="c-testimonial__img h-mb--2">
          <p><span v-for="(star, i) in testimonial.rating" :key="i"
          class="c-testimonial__text">*</span></p>
          <p v-if="testimonial.review" class="c-testimonial__text h-mb--2">{{testimonial.review}}</p>
          <h3 v-if="testimonial.name" class="c-testimonial__text h-mb--1">{{testimonial.name}}</h3>
          <p v-if="testimonial.name" class="c-testimonial__text">{{testimonial.job}}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionIntro from "../elements/SectionIntro.vue"

export default {
  name: 'ColumnsSection',
  components: {
    SectionIntro
  },
  props: {
    content: Object
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables.scss";
@import "../../assets/style/mixins.scss";

.c-testimonial {
  text-align: center;

  &__img {
    width: 7rem;
    border-radius: 50%;
    border: solid .25rem $magenta;
  }
}
</style>
