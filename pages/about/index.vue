<template>
  <div>
    <h1>About</h1>
    <navigation/>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
import axios from 'axios'

export default {
  components: {
    Navigation
  },  
  async asyncData ({ params }) {
    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/ditto/')
    return { name: data.forms }
  }  
}
</script>
