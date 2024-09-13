<script>


export default {
  name: "toolbar-content",


  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  }

}
</script>


<template>

  <div class="toolbar">
    <div class="title">Drinks</div>
    <pv-select-button v-model="$i18n.locale" :options="languages"/>
  </div>

</template>


<style scoped>
.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f8f9fa;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
}

button {
  padding: 5px 10px;
  font-size: 1em;
  cursor: pointer;
}
</style>