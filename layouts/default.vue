<template>

<v-app>
  <toollbar/>
  <res-menu/>
  <FullImageShows/>
  <Nuxt/>
</v-app>


</template>

<script>

import toollbar from "../components/toolbar/toollbar";
import ResMenu from "../components/respons-menu/res-menu";
import FullImageShows from "../components/full-image-show/full-image-shows";

export default {
  name: 'DefaultLayout',
  components: {FullImageShows, ResMenu, toollbar},
}

</script>
