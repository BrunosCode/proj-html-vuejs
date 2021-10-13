<template>
  <section class="c-section">
    <div class="l-container">
      <SectionIntro :content="content" />

      <div v-for="(card, i) in content.cards" :key="i" 
      :class="{'c-card--red': card.color === 'red'}" class="l-floatLeft c-card h-p--4">
        <h3 v-if="card.title" class="c-card__title h-mb--2">{{card.title}}</h3>
        <h5 v-if="card.subtitle" class="c-card__subtitle h-mb--2">{{card.subtitle}}</h5>
        <p v-if="card.price" class="c-card__text h-mr--4">$</p>
        <p v-if="card.price" class="c-card__price">{{card.price}}</p>
        <p v-if="card.price" class="c-card__shadowPrice">{{card.price}}</p>
        <p v-if="card.price" class="c-card__text h-mb--3">Per mounth</p>
        <ul v-if="card.features" class="h-listReset h-mb--3">
          <li v-for="(feature, i) in card.features" :key="i"
          class="c-card__text h-mb--1">{{feature}}</li>
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
  background-color: $darkBlue;
  color: $white;
  padding-bottom: 10rem;
  margin-bottom: 22rem;
}
.c-card {
  width: calc((100% / 3) - 4rem);
  display: float;
  float: left;
  text-align: center;
  background-color: $white;
  color: $black;
  margin: 0 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 .5rem $opacity-black-300;
  position: relative;
  &--red {
    @include bgGradient(330deg, $salmon, $magenta);
    color: white;
  }

  &__title {
    font-size: 2rem;
    text-transform: capitalize;
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
