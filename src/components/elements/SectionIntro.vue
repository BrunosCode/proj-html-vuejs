<template>
  <div class="c-intro h-mb--4">
    <h4 v-if="content.pretitle" class="c-intro__pretitle">{{content.pretitle}}</h4>
    <h2 v-if="content.title" class="c-intro__title h-mb--1">{{content.title}}</h2>
    <p v-if="content.text" class="c-intro__text h-mb--2">{{content.text}}</p>
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
