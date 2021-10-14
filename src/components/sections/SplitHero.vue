<template>
  <section :class="`h-bg--${content.bg}`" class="c-hero">
    <div :class="{'l-row--reversed': content.isReversed}" class="l-container l-row l-alignCenter">
      <div class="l-col--half">
        <h5 v-if="content.pretitle" v-html="content.pretitle" class="c-pretitle h-mb--2"></h5>
        <h2 v-if="content.title" v-html="content.title" class="c-hero__title c-title h-mb--2"></h2>
        <p v-if="content.text" v-html="content.text" class="c-text h-mb--3"></p>
        <div v-if="content.buttons" class="">
          <a v-for="(btn, i) in content.buttons" :key="i" 
          :href="btn.link" :class="`c-btn--${btn.type}`" 
          class="c-btn h-mr--2 h-mb--1">{{btn.text}}</a>
        </div>
      </div>
      <div class="l-col--half h-m--2">
        <img class="c-hero__img" :src="require(`../../assets/images/${content.img.src}`)" :alt="content.img.alt">
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'SplitHero',
  props: {
    content: Object,
    isReversed: Boolean,
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables.scss";
@import "../../assets/style/mixins.scss";

.c-hero {
  &__title {
    font-size: 3rem;
    @media screen and (max-width: 900px) {
      font-size: 2rem;
    }
  }
  &__img {
    width: 80%;
    @media screen and (max-width: 700px) {
      width: 50%;
    }
  }
}

@media screen and (max-width: 700px) {
  .l-row {
    flex-direction: column-reverse;
  }
  .l-row--reversed {
    flex: column;
  }
  .l-col--half {
    width: 100%;
    text-align: center;
  }
}
</style>
