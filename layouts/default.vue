<template>

<v-app>
  <toollbar/>
  <res-menu/>
  <full-image-show/>
  <Nuxt/>
  <footerA/>
</v-app>


</template>

<script>

import toollbar from "../components/heaader-footer/header";
import ResMenu from "../components/respons-menu/responsive-menu";
import FullImageShow from "../components/full-image-show/full-image-shows";
import footerA from "../components/heaader-footer/footer-A"

export default {
  name: 'DefaultLayout',
  components: {FullImageShow, ResMenu, toollbar,footerA},
}

</script>
