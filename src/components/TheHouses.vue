<script setup>

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
/*var dataset={
  Houses:[],
  filter:'',
  change(){
    this.Houses=List.filter((item)=>{
      if(item.name.match(new RegExp(this.filter,'gm'))){
        //item.visible=true
        return true
      }
      //item.visible=false
      return false
      //return item
    })
    return this.Houses
  }
}
dataset.change()*/

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
      this.Houses=Houses.filter(house=>house.name.match(target.filter))
      return target.Houses
    }
  }
}
</script>

<template>
  <div class="p-5 pt-5">
    <RouterLink to="/domki/dodaj" class="btn btn-primary">Dodaj</RouterLink>
  </div>

  <div class="p-5 pt-5">
    <input type="text" placeholder="wpisz fraze do szukania.." v-model="filter" v-on:change="Houses=Houses"/>
  </div>

  <div v-for="House in housesFilter" v-bind:key="House" class="p-5 pt-5">
    <div>{{House.kind}}</div>
    <h3>{{House.name}}</h3>
    <div class="animals">
      <div v-for="animal in House.animals" v-bind:key="animal">{{animal}}</div>
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