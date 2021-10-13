<template>
  <section class="c-section">
    <div class="l-container">
      <SectionIntro :content="content" class="l-alignStart"/>

      <div class="c-buttons">
        <button @click="previousIndex" class="c-btn c-arrow"><font-awesome-icon :icon="[ 'fas', 'arrow-left' ]" /></button>
        <button @click="nextIndex" class="c-btn c-arrow"><font-awesome-icon :icon="[ 'fas', 'arrow-right' ]" /></button>
      </div>
                
      <div class="l-row l-justifyCenter c-carousel">
        <!-- Semi hidden card left -->
        <div v-if="content.works.length >= 3" class="l-col l-col--1third l-alignCenter c-carousel__card c-card h-mx--2">
          <img v-if="content.works[previousImg].img" class="c-card__img h-mb--2" 
          :src="require(`../../assets/images/${content.works[previousImg].img}`)" 
          :alt="content.works[previousImg].title">
          <div class="l-row l-spaceBetween c-card__info h-mb--2">
            <p v-if="content.works[previousImg].title" 
            class="c-card__text"><strong>{{content.works[previousImg].title}}</strong></p>
            <p v-if="content.works[previousImg].subtitle" 
            class="c-card__text">{{content.works[previousImg].subtitle}}</p>
          </div>
        </div>
        <!-- Show cards -->
        <div v-for="(card, i) in content.works.slice(currentIndex, currentIndex + 3)" :key="i"
        class="l-col l-col--1third l-alignCenter c-carousel__card c-card h-mx--1">
          <img v-if="card.img" class="c-card__img h-mb--2" 
          :src="require(`../../assets/images/${card.img}`)" :alt="card.title">
          <div class="l-row l-spaceBetween c-card__info h-mb--2">
            <p v-if="card.title" class="c-card__text"><strong>{{card.title}}</strong></p>
            <p v-if="card.subtitle" class="c-card__text">{{card.subtitle}}</p>
          </div>
        </div>
        <!-- Semi hidden card right -->
        <div v-if="content.works.length >= 3" class="l-col l-col--1third l-alignCenter c-carousel__card c-card h-mx--2">
          <img v-if="content.works[nextImg].img" class="c-card__img h-mb--2" 
          :src="require(`../../assets/images/${content.works[nextImg].img}`)" 
          :alt="content.works[nextImg].title">
          <div class="l-row l-spaceBetween c-card__info h-mb--2">
            <p v-if="content.works[nextImg].title" 
            class="c-card__text"><strong>{{content.works[nextImg].title}}</strong></p>
            <p v-if="content.works[nextImg].subtitle" 
            class="c-card__text">{{content.works[nextImg].subtitle}}</p>
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
    previousImg() {
      if (this.currentIndex === 0) return this.content.works.length - 1;
      return this.currentIndex - 1;
    },
    nextImg() {
      if (this.currentIndex === this.content.works.length - 3) return 0;
      return this.currentIndex + 3;
    }
  },
  methods: {
    previousIndex() {
      if (this.currentIndex === 0) this.currentIndex = this.content.works.length - 1;
      this.currentIndex -= 1;
    },
    nextIndex() {
      if (this.currentIndex === this.content.works.length - 3) return this.currentIndex = 0;
      this.currentIndex += 1;
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
  width: calc((100% / 3) - 1rem);

  &__img {
    border-radius: 2rem;
    width: 100%;
  }
  &__info {
    width: 90%;
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

.c-buttons {
  position: absolute;
  top: 1rem;
  right: 0;
}
.c-arrow {
  display: inline-block;
  font-size: 1.25rem;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
  vertical-align: middle;
  border-radius: 50%;
  color: $gray-200;
  border: solid .2rem $gray-200;
  background-color: inherit;
  padding: 0;
  margin-left: 1rem;
  &:hover {
    transform: scale(.9);
  }
}
</style>
