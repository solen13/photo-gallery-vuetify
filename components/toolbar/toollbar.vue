<template>
  <v-toolbar class=" blue  " min-height="100"  max-height="100">

    <v-col class="d-flex  row mt-7 " >

      <p class="mt-9 hidden-xs-only">Photo Galley</p>
      <v-btn @click="menuShow" small   class="mt-9  hidden-md-and-up  transparent elevation-0 "><v-icon small>mdi-menu</v-icon></v-btn>


      <v-spacer/>

      <v-col class="d-flex justify-center mt-7 " >

        <v-btn  class="mx-1 transparent elevation-0 hidden-xs-only ">
          <v-icon small class="mr-1 ">mdi-home</v-icon>Home
        </v-btn>

        <v-btn class="mx-1 transparent elevation-0 hidden-xs-only">
          <v-icon small> mdi-dialpad</v-icon>Categories
        </v-btn>

        <v-btn class="mx-1 transparent elevation-0 hidden-xs-only ">
          <v-icon small class="mr-1">mdi-message-text </v-icon> Contact
        </v-btn>

      </v-col>

      <v-spacer/>
      <v-spacer/>

      <v-text-field solo-inverted
                    single-line
                    class=" mt-7 mr-2 text--black inputSearch"
                    v-model="search"
                    background-color="blue-grey lighten-5"
                    placeholder="Search.." />

      <v-btn fab small class="white mt-7" @click="searchBtn"><v-icon color="black" small>mdi-magnify</v-icon></v-btn>

    </v-col>

  </v-toolbar>
</template>

<script>

export default {
  name: "toollbar",
  components: {},

  data(){
   return{
     search:null,
   }
 },
  methods:{
    searchBtn(){
      this.$router.push('/search')
     this.$store.dispatch('image/pelexImageGetSearchs',this.search)
    },
    menuShow(){
      this.$store.commit('image/menuShows',true)
    }
  }
}
</script>

<style scoped>
</style>
