<template>
  <section class="c-section">
    <div class="l-container">
      <div class="c-intro">
        <h4 v-if="content.pretitle" class="c-intro__pretitle">{{content.pretitle}}</h4>
        <h2 v-if="content.title" class="c-intro__title h-mb--1">{{content.title}}</h2>
        <p v-if="content.text" class="c-intro__text h-mb--2">{{content.text}}</p>
      </div>
                
      <div class="l-row">
        <div v-for="(col, i) in content.columns" :key="i" class="l-col l-col--1fourth l-alignCenter c-col h-p--4">
          <img v-if="col.img" class="c-col__img h-mb--2" :src="require(`../assets/images/${col.img.src}`)" :alt="col.img.alt">
          <h3 v-if="col.title" class="c-col__title h-mb--2">{{col.title}}</h3>
          <p v-if="col.text" class="c-col__text">{{col.text}}</p>
        </div>
      </div>

      <div class="l-row l-justifyCenter">
        <a v-for="(btn, i) in content.buttons" :key="i" 
        :href="btn.link" :class="`c-btn--${btn.type}`" 
        class="c-btn h-mx--1">{{btn.text}}</a>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'ColumnsSection',
  props: {
    content: Object
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables.scss";
@import "../assets/style/mixins.scss";

.c-intro {
  text-align: center;

  &__title {
    text-transform: capitalize;
    font-size: 2.5rem;
  }
  &__pretitle {
    color: $magenta;
  }
}
</style>
