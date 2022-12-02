<template>

<v-app>
  <toollbar/>
  <res-menu/>
  <full-image-show/>
  <Nuxt/>

</v-app>


</template>

<script>

import toollbar from "../components/heaader-footer/header";
import ResMenu from "../components/respons-menu/responsive-menu";
import FullImageShow from "../components/full-image-show/full-image-shows";


export default {
  name: 'DefaultLayout',
  components: {FullImageShow, ResMenu, toollbar},
}

</script>
