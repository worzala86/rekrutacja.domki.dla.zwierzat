<script setup>
import axios from 'axios';

import HouseItem from './HouseItem.vue'

import Houses from 'http://localhost:4567/api/houses.js'

//var data={
//  Houses:null,
//}

/*var Houses={
  data () {
    return {
      houses: null,
    }
  },
  methods: {
      async loadHouses(){
        const response = await fetch("http://localhost:4567/api/houses.js");
      const { data: houses } = await response.json()
      this.houses = houses
    }
  }
}

Houses.methods.loadHouses()*/

</script>

<template>
  <RouterLink to="/domki/dodaj">Dodaj</RouterLink>

  <HouseItem v-for="House in Houses" v-bind:key="House">
    <template #heading>Documentation</template>

    Vue’s
    <a target="_blank" href="https://vuejs.org/">official documentation</a>
    provides you with all information you need to get started.
  </HouseItem>
</template>
