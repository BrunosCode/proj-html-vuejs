<template>
  <section :class="`h-bg--${content.bg}`" class="c-section">
    <div class="l-container">
      <SectionIntro :content="content" />

      <div class="l-row">
        <div v-for="(post, i) in content.posts" :key="i" 
        :class="post.img ? 'l-row l-spaceBetween l-row--mobileCol l-alignEnd l-col--half' : 'l-col l-alignStart l-col--1fourth'" 
        class="c-post h-p--2 h-m--2">
          <img v-if="post.img" :src="require(`../../assets/images/${post.img}`)" :alt="post.title"
          class="c-post__img">
          <div :class="{'l-col--2third': post.img}" class="c-post__info">
            <h5 class="c-post__pretitle h-my--2">{{post.date}} <span v-if="post.author">. {{post.author}}</span></h5>
            <h3 v-if="post.title" class="c-post__title h-mb--2">{{post.title}}</h3>
            <p v-if="post.text" class="c-post__text h-mb--2">{{post.text}}</p>
          </div>
          <div class="h-py--2">
            <a v-if="post.button" :href="post.button.link" 
            class="c-btn c-post__btn">{{post.button.text}}</a>
          </div>
        </div>  
      </div>
    </div>
  </section>
</template>

<script>
import SectionIntro from "../elements/SectionIntro.vue"

export default {
  name: 'PostsSection',
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

@media screen and (max-width: 1200px) {
    .l-row {
      flex-wrap: wrap;
    }
} 

.c-post {
  color: $white;
  @include bgGradient(330deg, $darkBlue, $blue);
  position: relative;
  border-radius: 1rem;
  overflow: hidden;

  &__info,
  &__btn {
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 1200px) {
      & {
        display: block;
        &.l-col--half,
        &.l-col--2third,
        &.l-col--1third {
          width: calc(100% - 2rem);
        }
        &.l-col--1fourth {
          width: calc(50% - 2rem);
        }
      }
  } 
  @media screen and (max-width: 600px) {
      & {
        text-align: center;
        display: block;
        &.l-col--1fourth,
        &.l-col--half {
          width: calc(100% - 2rem);
        }
      }
  } 

  &__btn {
    &:hover {
      transform: scale(.9);
    }
  }

  &__pretitle {
    font-weight: 400;
  }

  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 90%;
    z-index: 0;
  }
}

</style>
