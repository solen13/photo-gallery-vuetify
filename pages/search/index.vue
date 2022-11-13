<template>
  <v-main class="white main">

      <v-row  class="pa-4" >
          <searc-resualt :data="search"/>
      </v-row>

  </v-main>
</template>


<script>
import FullImageShows from "../../components/full-image-show/full-image-shows";
import SearcResualt from "../../components/searchPage/image-sorce-banner";
export default {
  name: "index",
  components: {SearcResualt, FullImageShows },
  computed:{
    search(){
      return this.$store.state.image.searchGetImage
    }
  }
}
</script>

<style scoped>
.main{
  position: relative;
}

</style>
