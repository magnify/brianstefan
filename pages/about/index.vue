<template>
  <div>
    <h1>About</h1>
    <ul>
      <li v-for="(pokemon, index) in pokemons" :key="pokemon.index">{{ pokemon.name }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default {
  components: {
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
