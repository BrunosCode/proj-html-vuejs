<template>
  <section class="c-hero">
    <div :class="{'l-row--reversed': isReversed}" class="l-container l-row l-alignCenter">
      <div class="l-col--half">
        <div class="l-col--2third">
          <h5 v-if="content.pretitle" class="c-hero__pretitle">{{content.pretitle}}</h5>
          <h2 v-if="content.title" class="c-hero__title h-mb--2">{{content.title}}</h2>
          <p v-if="content.text" class="c-hero__text h-mb--4">{{content.text}}</p>
          <div v-if="content.buttons">
            <a v-for="(btn, i) in content.buttons" :key="i" 
            :href="btn.link" :class="`c-btn--${btn.type}`" 
            class="c-btn h-mr--2">{{btn.text}}</a>
          </div>
        </div>
      </div>
      <div class="l-col--half h-m--2">
        <img class="c-hero__img" :src="require(`../assets/images/${content.img.src}`)" :alt="content.img.alt">
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
@import "../assets/style/variables.scss";
@import "../assets/style/mixins.scss";

.c-hero {
  color: $white;
  @include bgGradient(180deg, $blue, $darkBlue);

  &__title {
    text-transform: capitalize;
    font-size: 3rem;
  }
}

</style>
