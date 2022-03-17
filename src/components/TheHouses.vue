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
  <div class="p-5 pt-5">
    <RouterLink to="/domki/dodaj" class="btn btn-primary">Dodaj</RouterLink>
  </div>

  <HouseItem v-for="House in Houses" v-bind:key="House">
    <template #heading>{{House.name}}</template>

    {{House.name}}
    <a target="_blank" href="https://vuejs.org/">{{House.name}}</a>
    <div v-for="animal in House.animals" v-bind:key="animal">{{animal}}</div>
  </HouseItem>
</template>
