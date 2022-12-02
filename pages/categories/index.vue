<template>
  <v-main>
    <v-row >

      <v-col class="white" cols="3">
       <sildeBar />
      </v-col>

      <v-col class="white" cols="9">
        <v-row class="px-5 py-5">
          <v-col v-for="item in categoriesBanner">
            <imagepayload :data="item"/>
          </v-col>

        </v-row>
      </v-col>

    </v-row>

  </v-main>
</template>

<script>

import imagepayload from "../../components/image-payload/image-sorce-banner";
import sildeBar from "../../components/silde-bar/silde-bar";

export default {
  name: "index",
  components: {sildeBar, imagepayload},

  methods:{
    listsClick(listitem){
      this.$store.dispatch('image/pelexImageGetSearchs',listitem.title)
    }
  },
  created() {
    this.$store.dispatch('image/pelexImageGetSearchs','person')
  },
  computed:{
    categoriesBanner(){
     return this.$store.state.image.searchGetImage
    }
  }
}
</script>

<style scoped>

</style>
