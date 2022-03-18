<script setup>


import Houses from 'http://localhost:4567/api/houses.js'


</script>

<script>
export default {
  data() {
    return {
      Houses: Houses,
      filter:'',
    }
  },
  computed: {
    housesFilter(target) {
      this.Houses=Houses.filter(house=>{
        return house.name.toLowerCase().match(target.filter)||house.kind.toLowerCase().match(target.filter)
          ||house.animals.join('').toLowerCase().match(target.filter)
      })
      return target.Houses
    }
  }
}
</script>

<template>
<div class="p-5 pt-5">
  <div class="p-4 pt-4">
    <RouterLink to="/domki/dodaj" class="btn btn-primary">Dodaj</RouterLink>
  </div>

  <div class="p-4 pt-4">
    <input type="text" placeholder="wpisz fraze do szukania.." v-model="filter" v-on:change="Houses=Houses"/>
  </div>

  <div v-for="House in housesFilter" v-bind:key="House" class="p-4 pt-4">
    <div>{{House.kind}}</div>
    <h3>{{House.name}}</h3>
    <div class="animals">
      <div v-for="animal in House.animals" v-bind:key="animal">{{animal}}</div>
    </div>
  </div>
  </div>
</template>
<style scoped>
.animals{
  display: inline-block;
}
.animals div{
  display: inline-block;
  margin-right: 15px;
}
</style>