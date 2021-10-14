<template>
  <section :class="`h-bg--${content.bg}`" class="c-section">
    <div class="l-container">
      <SectionIntro :content="content" />
                
      <div class="l-row l-wrap l-alignCenter">
        <div v-for="(col, i) in content.columns" :key="i" class="l-col l-col--1fourth l-alignCenter h-textCenter h-p--4">
          <img v-if="col.img" :src="require(`../../assets/images/${col.img.src}`)" :alt="col.img.alt"
          class="c-col__img h-mb--2">
          <h3 v-if="col.title" v-html="col.title" class="c-title c-col__title h-mb--2"></h3>
          <p v-if="col.text" v-html="col.text" class="c-text"></p>
        </div>
      </div>

      <div class="l-row l-justifyCenter">
        <a v-for="(btn, i) in content.buttons" :key="`btn${i}`" 
        :href="btn.link" :class="`c-btn--${btn.type}`" 
        class="c-btn h-mx--1">{{btn.text}}</a>
      </div>
    </div>
  </section>
</template>

<script>
import SectionIntro from "../elements/SectionIntro.vue"

export default {
  name: 'ColumnsSection',
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

.c-col {
  &__title {
    font-weight: 700;
  }
  @media screen and (max-width: 1200px) {
    &__img {
      width: 9rem;
    }
  }
}

@media screen and (max-width: 900px) {
    .l-col--1fourth {
      width: 50%;
    }
}
@media screen and (max-width: 500px) {
    .l-col--1fourth {
      width: 100%;
    }
}

</style>
