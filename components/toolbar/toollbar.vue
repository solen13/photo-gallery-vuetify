<template>
  <v-toolbar class=" blue  " min-height="100"  max-height="100">

    <v-col class="d-flex  row mt-5 " >

      <p class="mt-9 hidden-xs-only">Photo Galley</p>

      <v-spacer/>

      <v-col class="d-flex justify-center mt-7 " >

        <v-btn  class="mx-1 transparent elevation-0 hidden-xs-only "  @click="$router.push('/')">
          <v-icon small class="mr-1 ">mdi-home</v-icon>Home
        </v-btn>

        <v-btn class="mx-1 transparent elevation-0 hidden-xs-only" @click="$router.push('/categories')">
          <v-icon small> mdi-dialpad</v-icon>Categories
        </v-btn>

        <v-btn class="mx-1 transparent elevation-0 hidden-xs-only " @click="$router.push('/contact')">
          <v-icon small class="mr-1 ">mdi-message-text </v-icon> Contact
        </v-btn>


      </v-col>

      <v-spacer/>
      <v-spacer/>

      <v-card  class=" transparent elevation-0 mb-3 d-flex justify-center align-center " >

        <v-btn @click="menuShow"    class=" mr-8 hidden-md-and-up  transparent elevation-0 ">
          <v-icon >mdi-account-outline</v-icon>
        </v-btn>

        <input style="height: 40px"  class="search-input"  v-model="search"
               type="text"
               placeholder="Search.." />

        <v-btn fab small class="white ml-3" @click="searchBtn">
          <v-icon color="black" small>mdi-account-outline</v-icon>
        </v-btn>

      </v-card>

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
      if(this.search != null){

        this.$store.dispatch('image/pelexImageGetSearchs',this.search)

        this.$router.push('/search')
      }
      else{
        alert('Aramak istediğin kelimeyi gir')
      }
    },
    menuShow(){
      this.$store.commit('image/menuShows',true)
    },

  }
}
</script>

<style scoped>
.search-input{
  border: 1px solid rgba(208, 214, 215, 0.4);
  outline: none;
  padding: 5px;
  border-radius: 5px;
  color: white;
}
.search-input::placeholder{
  color: white;
}
</style>
