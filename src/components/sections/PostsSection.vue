<template>
  <section class="c-section">
    <div class="l-container">
      <SectionIntro :content="content" />

      <div class="l-row">
        <div v-for="(post, i) in content.posts" :key="i" 
        :class="post.img ? 'l-row l-col--half' : 'l-col l-col--1fourth'" 
        class="c-post">
          <img v-if="post.img" :src="require(`../assets/images/${post.img}`)" :alt="post.title">
          <div :class="{'l-col--2third': post.img}">
            <h5 class="c-post__pretitle h-mb--2">{{post.date}} <span v-if="post.author">. {{post.author}}</span></h5>
            <h3 v-if="post.title" class="c-post__title h-mb--2">{{post.title}}</h3>
            <p v-if="post.text" class="c-post__text h-mb--3">{{post.text.substring(0, 80) + '...'}}</p>
          </div>
          <a v-if="card.button" :href="card.button.link" 
          class="c-btn">{{card.button.text}}</a>
        </div>  
      </div>
    </div>
  </section>
</template>

<script>
import SectionIntro from "../elements/../SectionIntro.vue"

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

.c-post {
  color: white;
}

</style>
