<template>
  <div class="c-intro h-textCenter h-mb--4">
    <h4 v-if="content.pretitle" v-html="content.pretitle" class="c-pretitle"></h4>
    <h2 v-if="content.title" v-html="content.title"  class="c-intro__title c-title h-mb--1"></h2>
    <p v-if="content.text" v-html="content.text" class="c-text h-mb--2"></p>
  </div>
</template>

<script>
export default {
  name: 'SectionIntro',
  props: {
    content: Object
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/style/variables.scss";

.c-intro {
  &__title {
    font-size: 2.5rem;
  }
}
</style>
