<template>
  <v-main>
    <v-row >

      <v-col class="white" cols="3">
       <sildeBar/>
      </v-col>

      <v-col class="white" cols="9">
        <v-row class="px-5 py-5">
          <searc-resualt :data="categoriesBanner"/>
        </v-row>
      </v-col>

    </v-row>

  </v-main>
</template>

<script>
import VueMagnifier from "../../components/image-zoom/vue-magnifier";
import SearcResualt from "../../components/searchPage/image-sorce-banner";
import ImageBaner from "../../components/image-banner/imageBanner";
import sildeBar from "../../components/silde-bar/silde-bar";

export default {
  name: "index",
  components: {sildeBar, ImageBaner, SearcResualt, VueMagnifier},

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
