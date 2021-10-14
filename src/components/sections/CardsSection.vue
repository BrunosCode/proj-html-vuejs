<template>
  <section :class="`h-bg--${content.bg}`" class="c-section h-textCenter">
    <div class="l-container">
      <SectionIntro :content="content" />

      <div v-for="(card, i) in content.cards" :key="i" 
      :class="`h-bg--${card.bg}`" class="l-floatLeft c-card h-p--4">
        <h3 v-if="card.title" v-html="card.title" class="c-card__title c-title h-mb--2"></h3>
        <h5 v-if="card.subtitle" v-html="card.subtitle" class="c-card__subtitle c-subtitle h-mb--2"></h5>
        <p v-if="card.price" v-html="card.currency" class="c-subtitle c-card__currency h-mr--5"></p>
        <p v-if="card.price" v-html="card.price" class="c-card__price c-title"></p>
        <p v-if="card.price" v-html="card.price" class="c-card__shadowPrice"></p>
        <p v-if="card.price" class="c-subtitle h-mb--3">Per mounth</p>
        <ul v-if="card.features" class="h-listReset h-mb--3">
          <li v-for="(feature, i) in card.features" :key="i" v-html="feature"
          class="c-text h-mb--1"></li>
        </ul>
        <a  v-if="card.button" :href="card.button.link" 
        :class="{'c-btn--arrowRed': card.button.type === 'arrowRed'}" 
        class="c-btn c-btn--arrow">{{card.button.text}}</a>
      </div>
    </div>
  </section>
</template>

<script>
import SectionIntro from "../elements/SectionIntro.vue"

export default {
  name: 'CardsSection',
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

.c-section {
  padding-bottom: 10rem;
  margin-bottom: 22rem;
  @media screen and (max-width: 900px) {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
}
.c-card {
  width: calc((100% / 3) - 2rem);
  float: left;
  text-align: center;
  margin: 0 1rem;

  border-radius: 1rem;
  box-shadow: 0 0 .5rem $opacity-black-300;
  position: relative;
  @media screen and (max-width: 900px) {
    width: calc((100% / 2) - 2rem);
    margin: 1rem;
    float: none;
    display: inline-block;
  }
  @media screen and (max-width: 600px) {
    width: calc((100%) - 2rem);
    margin: 1rem;
    float: none;
    display: inline-block;
  }

  &__title {
    font-size: 2rem;
  }
  &__subtitle {
    text-transform: uppercase;
  }
  &__price {
    font-size: 3rem;
    font-weight: 900;
  }
  &__shadowPrice {
    position: absolute;
    top: -1.25rem;
    right: -.5rem;
    font-size: 12rem;
    line-height: 12rem;
    display: block;
    font-weight: 900;
    color: $opacity-black-400;
  }
}

</style>
