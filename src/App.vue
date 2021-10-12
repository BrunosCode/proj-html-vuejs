<template>
  <div id="app">
    <Header :header-nav="headerNav" :bg-color="'primary'"/>
    <!-- Header with logo and headerNav component-->
    <main class="c-main">
      <SplitHero :content="heroSection" :is-reversed="false" class="h-py--4" />
      <ColumnsSection :content="ourServices" class="h-py--3"/>
      <SplitHero :content="startYourProject" :is-reversed="true" class="h-py--3" />
      <!-- CaruselSection -->
      <CardsSection :content="ourPricing" class="h-py--3" />
      <!-- PostsSection -->
      <!-- TestimonialsSection -->
      <!-- LogosSection -->
    </main>
    <Footer :footer-nav="footerNav" :company-info="companyInfo" :bg-color="'primary'"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import SplitHero from "./components/SplitHero.vue";
import ColumnsSection from "./components/ColumnsSection.vue";
import CardsSection from "./components/CardsSection.vue";

import companyInfo from "./data/companyInfo.json";
import headerNav from "./data/headerNav.json";
import footerNav from "./data/footerNav.json";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    SplitHero,
    ColumnsSection,
    CardsSection
  },
  data() {
    return {
      companyInfo,
      headerNav,
      footerNav,
      heroSection: {
        title: "Business planning digital technology modern solution !",
        text: "When, while the valley teems with vapour around meand the meridian sun strikes the upper surface .",
        buttons: [
          {
            text: "Try it now",
            link: "#",
            type: "red"
          },
          {
            text: "Explore More",
            link: "#",
            type: "blue"
          }
        ],
        img: {
          alt: "Man behind the desk",
          src: "header.png"
        }
      },
      startYourProject: {
        pretitle: "Start you project",
        title: "Grow your business with our strategy",
        text: "When, while the valley teems with vapour around meand the meridian sun strikes the upper surface of the impenetrable follage of my trees, and but a few stray gleams steal into the inner sanctury.",
        buttons: [
          {
            text: "Try it now",
            link: "#",
            type: "red"
          },
          {
            text: "Explore More",
            link: "#",
            type: "blue"
          }
        ],
        img: {
          alt: "Man over stacks",
          src: "men-data.png"
        }
      },
      ourServices: {
        pretitle: "Our Services",
        title: "What we do",
        text: "When, while the lovely valley teems with vapour around meand the",
        buttons: [
          {
            text: "View all services",
            link: "#",
            type: "red"
          }
        ],
        columns: [
          {
            title: "Data Analysis",
            text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            img: {
              alt: "Data Analysis",
              src: "Group-247.png"
            }
          },
          {
            title: "SEO Optimization",
            text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            img: {
              alt: "SEO Optimization",
              src: "Group-567.png"
            }
          },
          {
            title: "Security Data",
            text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            img: {
              alt: "Security Data",
              src: "Group-538.png"
            }
          },
          {
            title: "Branding Strategy",
            text: "When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper",
            img: {
              alt: "Branding Strategy",
              src: "Group-566.png"
            }
          }
        ]
      },
      ourPricing: {
        pretitle: "Price list",
        title: "Our pricing",
        text: "When, while the lovely valley teems with vapour around meand the",
        cards: [
          {
            title: "Designing",
            subtitle: "process",
            price: "40",
            color: "white",
            features: [
              "Creative design enabled",
              "Vibrant color usage",
              "Eye catching design",
              "Extreme typography",
              "Exceptional design"
            ],
            button: {
              text: "Order now",
              link: "#",
              type: "arrowRed"
            }
          },
          {
            title: "Developing",
            subtitle: "product",
            price: "60",
            color: "red",
            features: [
              "Creative design enabled",
              "Vibrant color usage",
              "Eye catching design",
              "Extreme typography",
              "Exceptional design"
            ],
            button: {
              text: "Order now",
              link: "#",
              type: "arrowWhite"
            }
          },
          {
            title: "Supporting",
            subtitle: "clients",
            price: "80",
            color: "white",
            features: [
              "Creative design enabled",
              "Vibrant color usage",
              "Eye catching design",
              "Extreme typography",
              "Exceptional design"
            ],
            button: {
              text: "Order now",
              link: "#",
              type: "arrowRed"
            }
          },
          
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import "./assets/style/variables.scss";
@import "./assets/style/common.scss";

</style>
