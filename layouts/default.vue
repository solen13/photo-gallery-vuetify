<template>

<v-app>
  <toollbar/>
  <res-menu/>
  <full-image-show/>
  <Nuxt/>
  <b>footer</b>
</v-app>


</template>

<script>

import toollbar from "../components/toolbar/toollbar";
import ResMenu from "../components/respons-menu/res-menu";
import FullImageShow from "../components/full-image-show/full-image-shows";

export default {
  name: 'DefaultLayout',
  components: {FullImageShow, ResMenu, toollbar},
}

</script>
