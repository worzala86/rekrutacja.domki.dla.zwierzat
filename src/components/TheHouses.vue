<script setup>


import Houses from 'http://localhost:4567/api/houses.js'


</script>

<script>
export default {
  data() {
    return {
      Houses: Houses,
      filter:'',
      currencies:[{name:'PLN',value:1},{name:'EUR',value:4.8},{name:'DOL',value:4.2}],
      currCurrency:{name:'PLN',value:1},
    }
  },
  computed: {
    housesFilter(target) {
      this.Houses=Houses
      this.Houses=this.Houses.filter(house=>{
        return house.name.toLowerCase().match(target.filter)||house.kind.toLowerCase().match(target.filter)
          ||house.price.toString().toLowerCase().match(target.filter)
          ||house.animals.join('').toLowerCase().match(target.filter)
      })
      /*this.Houses.map(house=>{
        house.price=this.calculate(house.price)
        return house
      })*/
      this.Houses=this.Houses.map(house=>{
        house.priceDisplay=(house.price*(1/this.currCurrency.value)).toFixed(2)
        return house
      })
      return target.Houses
    },
    /*setCurrency(newCurrency){
      this.currCurrency=newCurrency
    },*/
    /*calculate(target){
      //return (num)*(1/this.currCurrency)
      target.Houses.map(house=>(house.price*(1/this.currCurrency)))
    }*/
  }
}
</script>

<template>
<div class="p-5 pt-5">
  <div class="p-4 pt-4">
    <RouterLink to="/domki/dodaj" class="btn btn-primary">Dodaj</RouterLink>
  </div>


  <div class="p-4 pt-4">
    <div class="row">
      <div class="col-6">
    <input class="form-control" type="text" placeholder="wpisz fraze do szukania.." v-model="filter" v-on:change="Houses=Houses"/>
    </div>
    <div class="col-6">
      <span v-for="currency in currencies" v-bind:key="currency" class="currency" v-on:click="currCurrency=currency;Houses=Houses">{{currency.name}}</span>
    </div>
  </div>
</div>

  <div v-for="House in housesFilter" v-bind:key="House" class="p-4 pt-4 row">
    <div class="col-2 price">
      {{House.priceDisplay}}
      <span>{{currCurrency.name}}</span>
    </div>
    <div class="col-10">
      <div>{{House.kind}}</div>
      <h3>{{House.name}}</h3>
      <div class="animals">
        <div v-for="animal in House.animals" v-bind:key="animal">{{animal}}</div>
      </div>
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
.price{
  font-size:1.8em;
}
.currency {
    margin: 0px 7px;
    border: 1px solid #ccc;
    padding: 4px 10px;
    display: inline-block;
}
.price span{
    font-size: 0.65em;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    align-items: flex-start;
    align-content: flex-start;
    margin-top: -10px;
}
</style>