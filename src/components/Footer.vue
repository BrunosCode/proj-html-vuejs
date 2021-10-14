<template>
  <footer :class="`h-bg--${bgColor}`" class="c-footer">
    <CtaBanner :content="cta" class="c-footer__banner h-py--4" />

    <!-- Upper footer -->
    <div class="l-container l-row l-wrap h-pb--4">
      <div class="l-col--1fourth h-mb--2 h-px--1">
        <Logo class="h-mb--1"/>
        <p v-if="companyInfo.slogan" v-html="companyInfo.slogan" class="c-text"></p>
      </div>

      <nav v-for="(nav, i) in footerNav" :key="i"
      class="c-footer__nav l-col--1fourth h-mb--2 h-px--1">
        <h3 v-if="nav.title" v-html="nav.title" class="c-title h-mb--1"></h3>
        <!-- Print data from the prop json file -->
        <ul class="h-listReset">
          <li v-for="(link, i) in nav.links" :key="i" class="h-mb--1">
            <a :class="{'h-active': link.text === 'home'}" :href="link.link" :alt="link.text"
            class="c-link">
              {{link.text}}
              <!-- <template v-hmtl="link.text" ></template> -->
            </a>
          </li>
        </ul>
      </nav>

      <div class="l-col--1fourth h-mb--2 h-px--1">
        <h3 class="c-title c-footer__title h-mb--2">Contact Us</h3>
        <p v-if="companyInfo.address" class="h-mb--2"> 
          <span class="c-subtitle">Address: </span>
          <span class="c-text">{{companyInfo.address}}</span>
        </p>
        <p v-if="companyInfo.phone" class="h-mb--1">
          <span class="c-subtitle">Phone: </span>
          <a :href="`tel:${companyInfo.phone}`" class="c-link">{{companyInfo.phone}}</a>
        </p>
        <p v-if="companyInfo.email"> 
          <span class="c-subtitle">Email: </span>
          <a :href="`mailto:${companyInfo.email}`" class="c-link">{{companyInfo.email}}</a>
        </p>
      </div>
    </div>

    <!-- Bottom footer -->
    <div class="c-footer__bottom">
      <div class="l-container l-row l-spaceBetween ">
        <p class="c-footer__text">{{companyInfo.copyright}}</p>
        <div class="c-footer__icons">
          <a v-for="(icon, i) in companyInfo.socialLinks" :key="i" :href="icon.link" :alt="icon.social"
          class="c-link h-ml--2"><font-awesome-icon :icon="[ 'fab', icon.icon ]" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import Logo from "./elements/Logo.vue";
import CtaBanner from "./elements/CtaBanner.vue";

export default {
  name: 'Footer',
  components: {
    Logo,
    CtaBanner
  },
  props: {
    footerNav: Array,
    companyInfo: Object,
    bgColor: String
  },
  data() {
    return {
      cta: {
        "title": "We offer awesome services",
        "text": "When, while lovely valley teems with vapour around meand meridian sun strikes the upper surface.",
        "bg": "redGradient"
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/style/variables.scss";
@import "../assets/style/mixins.scss";

.c-footer {
  color: $white;
  @include bgGradient(180deg, $blue, $darkBlue);

  &__banner {
    position: relative;
    top: -5rem;
  }

  .c-subtitle {
    font-weight: 700;
    opacity: 1;
  }

  .c-title {
    text-transform: capitalize;
    font-weight: 700;
  }
  .c-link {
    text-transform: capitalize;
  }

  .c-text,
  .c-link {
    opacity: .7;
  }

  &__bottom {
    border-top: 1px solid $opacity-white-400;
    padding: 1rem;
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
    text-align: center;
  }
}

</style>
