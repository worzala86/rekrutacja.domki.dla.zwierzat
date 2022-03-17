<script setup>
//import HouseItem from './HouseItem.vue'
/*import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'*/
//import Houses from '../datasets/Houses.js'
//import fs from 'fs';

/*function addHouse(){
  console.log('add')
}*/

const HomeAdd={

  domek:{
    kind:'tree',
    animals:[],
  },

  //selectedAnimals:[],

 /* animals:[
    'Ptaki',
    'Lisy',
    'Sarny',
    'Dziki',
  ],
  //}*/

  //domek.animals=animals

  /*export default {
    data() {
      return {
        domek,
      }
    }
  }*/

  async addHouse(){
    const animals=Object.keys(HomeAdd.domek.animals);
    await fetch('http://localhost:4567/api/houses',{
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
              body: JSON.stringify({house:{kind:HomeAdd.domek.kind,animals:animals}})
      },).then(async rawResponse =>{
          var content = await rawResponse.json()
          console.log(content);
      });
  }
}

</script>

<template>
  <form>
    <div class="form-group">
      <label>Rodzaj montowania</label>
      <select class="form-select" v-model="HomeAdd.domek.kind">
        <option value="tree" selected>Wieszany na drzewie</option>
        <option value="ground">Montowany na ziemi</option>
      </select>
    </div>
    <div class="">
      <h3>Przeznaczony dla zwierząt</h3>
       <div class="custom-control custom-checkbox">
        <input type="checkbox" v-model="HomeAdd.domek.animals.Ptaki" value="Ptaki" id="Ptaki"/>
        <label for="Ptaki">Ptaki</label>
</div><div class="custom-control custom-checkbox">
        <input type="checkbox" v-model="HomeAdd.domek.animals.Lisy" value="Lisy" id="Lisy"/>
        <label for="Lisy">Lisy</label>
</div><div class="custom-control custom-checkbox">
        <input type="checkbox" v-model="HomeAdd.domek.animals.Sarny" value="Sarny" id="Sarny"/>
        <label for="Sarny">Sarny</label>
</div><div class="custom-control custom-checkbox">
        <input type="checkbox" v-model="HomeAdd.domek.animals.Dziki" value="Dziki" id="Dziki"/>
        <label for="Dziki">Dziki</label>
     </div>
    </div>

  <button v-on:click="HomeAdd.addHouse()" class="btn btn-primary" type="button">Zapisz</button>
</form>
</template>
