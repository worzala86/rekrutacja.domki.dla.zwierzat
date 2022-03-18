<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>

      <!--<nav class="p-5 pt-5">
        <RouterLink to="/domki">Domki</RouterLink>
      </nav>-->
    
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
nav a{
  margin: 5px;
}
body {
    font-size: 1.15em !important;
}
*{
    font-weight: 500;
}
</style>
