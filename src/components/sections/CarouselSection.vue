<template>
  <section class="c-section">
    <div class="l-container">
      <SectionIntro :content="content" class="l-alignStart"/>
                
      <div class="l-row l-justifyCenter c-carousel">
        <!-- Semi hidden card left -->
        <div v-if="content.works.length >= 3" class="l-col l-col--1third l-alignCenter c-carousel__card c-card h-mr--3">
          <img v-if="content.works[previusIndex].img" class="c-card__img h-mb--2" 
          :src="require(`../../assets/images/${content.works[previusIndex].img}`)" 
          :alt="content.works[previusIndex].title">
          <div class="l-row l-spaceBetween h-mb--2">
            <p v-if="content.works[previusIndex].title" 
            class="c-card__title h-mr--3"><strong>{{content.works[previusIndex].title}}</strong></p>
            <p v-if="content.works[previusIndex].subtitle" 
            class="c-card__text">{{content.works[previusIndex].subtitle}}</p>
          </div>
        </div>
        <!-- Show cards -->
        <div v-for="(card, i) in content.works.slice(currentIndex, currentIndex + 3)" :key="i"
        class="l-col l-col--1third l-alignCenter c-carousel__card c-card h-mr--3">
          <img v-if="card.img" class="c-card__img h-mb--2" 
          :src="require(`../../assets/images/${card.img}`)" :alt="card.title">
          <div class="l-row l-spaceBetween h-mb--2">
            <p v-if="card.title" class="c-card__title h-mr--3"><strong>{{card.title}}</strong></p>
            <p v-if="card.subtitle" class="c-card__text">{{card.subtitle}}</p>
          </div>
        </div>
        <!-- Semi hidden card right -->
        <div v-if="content.works.length >= 3" class="l-col l-col--1third l-alignCenter c-carousel__card c-card h-mr--3">
          <img v-if="content.works[nextIndex].img" class="c-card__img h-mb--2" 
          :src="require(`../../assets/images/${content.works[nextIndex].img}`)" 
          :alt="content.works[nextIndex].title">
          <div class="l-row l-spaceBetween h-mb--2">
            <p v-if="content.works[nextIndex].title" 
            class="c-card__title h-mr--3"><strong>{{content.works[nextIndex].title}}</strong></p>
            <p v-if="content.works[nextIndex].subtitle" 
            class="c-card__text">{{content.works[nextIndex].subtitle}}</p>
          </div>
        </div>
      </div>
      <div class="l-row l-justifyCenter h-my--2">
        <button v-for="(pullet, i) in content.works.slice(0, content.works.length - 2)" :key="i" @click="currentIndex = i"
        :class="{'h-active': i === currentIndex}" class="c-bullet h-mx--1"></button>
      </div>
    </div>
  </section>
</template>

<script>
import SectionIntro from "../elements/SectionIntro.vue"

export default {
  name: 'CarouselSection',
  components: {
    SectionIntro
  },
  props: {
    content: Object
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  computed: {
    previusIndex() {
      if (this.currentIndex === 0) return this.content.works.length - 1;
      return this.currentIndex - 1;
    },
    nextIndex() {
      if (this.currentIndex === this.content.works.length - 3) return 0;
      return this.currentIndex + 3;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables.scss";
@import "../../assets/style/mixins.scss";

.c-section {
  overflow: hidden;
}
.c-card {
  text-align: center;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 0 1rem $opacity-black-400;
  flex-shrink: 0;

  &__img {
    border-radius: 2rem;
    width: 100%;
  }
}
.c-bullet {
  display: block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: none;
  background-color: $gray-200;

  &.h-active {
    background-color: $gray-500;
    border: solid .3rem $gray-200;
  }
}
</style>
