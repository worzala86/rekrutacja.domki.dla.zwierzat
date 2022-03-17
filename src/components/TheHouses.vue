<script setup>
import axios from 'axios';

import HouseItem from './HouseItem.vue'

//var data={
//  Houses:null,
//}

var Houses={
  data () {
    return {
      houses: null,
    }
  },
  methods: {
      async loadHouses(){
        const response = await fetch("http://localhost:4567/api/houses");
      const { data: houses } = await response.json()
      this.houses = houses
    }
  }
}

Houses.methods.loadHouses()

</script>

<template>
  <a href="/domki/dodaj">dodaj</a>

  <HouseItem v-for="House in Houses.data()" v-bind:key="House">
    <template #heading>Documentation</template>

    Vue’s
    <a target="_blank" href="https://vuejs.org/">official documentation</a>
    provides you with all information you need to get started.
  </HouseItem>
</template>
