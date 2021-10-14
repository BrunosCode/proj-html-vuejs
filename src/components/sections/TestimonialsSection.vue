<template>
  <section :class="`h-bg--${content.bg}`" class="c-section">
    <div class="l-container">
      <SectionIntro :content="content" />
                
      <div class="l-row l-wrap">
        <div v-for="(testimonial, i) in content.testimonials" :key="i" 
        class="l-col l-col--1third l-alignCenter c-testimonial h-textCenter h-p--4">
          <img v-if="testimonial.img" :src="require(`../../assets/images/${testimonial.img}`)" :alt="testimonial.name"
          class="c-testimonial__img h-mb--3">
          <span class="c-testimonial__bgIcon">"</span>
          <p class="c-testimonial__stars h-mb--2">
            <font-awesome-icon  v-for="(star, i) in testimonial.rating" :key="i" 
            :icon="[ 'fas', 'star' ]" />
            <font-awesome-icon  v-for="(star, i) in 5-testimonial.rating" :key="5-i" 
            :icon="[ 'far', 'star' ]" />
          </p>
          <p v-if="testimonial.review" v-html="testimonial.review" class="c-text h-mb--2"></p>
          <h3 v-if="testimonial.name" v-html="testimonial.name" class="c-title c-testimonial__name h-mb--1"></h3>
          <p v-if="testimonial.name" v-html="testimonial.job" class="c-subtitle"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionIntro from "../elements/SectionIntro.vue"

export default {
  name: 'TestimonialsSection',
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
  position: relative;

  &__img {
    width: 6rem;
    border-radius: 50%;
    border: solid .25rem $magenta;
  }

  &__bgIcon {
    position: absolute;
    font-size: 20rem;
    top: 7rem;
    margin-right: 2rem;
    font-style: italic;
    color: $opacity-gray-100;
    font-weight: 900;
  }

  &__stars {
    color: $magenta;
  }

  &__name {
    font-weight: 700;
  }
}

@media screen and (max-width: 900px) {
    .l-col--1third {
      width: 100%;
    }
  }

</style>
