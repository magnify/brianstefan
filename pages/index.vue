<template>
  <div>
    <h1>Home</h1>
    <ul>
      <li v-for="(pokemon, index) in pokemons" :key="pokemon.index">{{ pokemon.name }}</li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/')
    return { pokemons: data.results }
  }
}
</script>
