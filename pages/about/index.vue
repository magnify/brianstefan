<template>
  <div>
    <Slide/>
    <h1>About</h1>
    <navigation/>
    <ul>
      <li v-for="(pokemon, index) in pokemons" :key="pokemon.index">{{ pokemon.name }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import Navigation from '~/components/Navigation.vue'
import Slide from '~/components/Slide.vue'
import axios from 'axios'

export default {
  components: {
    Navigation,
    Slide
  },

  async asyncData ({ params }) {
    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    return { pokemons: data.results }
  },

  data() {
      return {
        fruits: [
          { name: 'apple' },
          { name: 'banana' },
          { name: 'orange' }         
        ]
      };
  }
}
</script>
