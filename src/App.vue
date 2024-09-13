<script>

import FooterContent from "./public/components/footer-content.component.vue";
import ToolbarContent from "./public/components/toolbar-content.component.vue";
import DrinkCard from "./drinks/components/drink-card.component.vue";


export default {
  name: "App",
  components: {DrinkCard, ToolbarContent, FooterContent},

  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  },

  created() {
    console.log("App created");
  }

}


</script>


<template>


  <div>
    <toolbar-content></toolbar-content>
  </div>

  <div>
    <drink-card></drink-card>
  </div>

  <div>
    <footer-content></footer-content>
  </div>

</template>





<style scoped>

</style>
