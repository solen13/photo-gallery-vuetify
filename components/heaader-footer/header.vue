<template>
  <v-card color="grey lighten-4" flat  tile >
    <v-toolbar class="blue" height="80">
      <v-row>

        <v-col class="d-flex justify-space-between align-center" >

          <div class="hidden-xs-only" v-text="'Photo Gallery'" @click="mainPage"/>

          <div class="hidden-xs-only d-flex justify-center " >

            <v-btn  class="mx-1 transparent elevation-0 hidden-xs-only "  @click="$router.push('/')">
              <v-icon small class="mr-1 ">mdi-home</v-icon>Home
            </v-btn>

            <v-btn class="mx-1 transparent elevation-0 hidden-xs-only" @click="$router.push('/categories')">
              <v-icon small> mdi-dialpad</v-icon>Categories
            </v-btn>

            <v-btn class="mx-1 transparent elevation-0 hidden-xs-only " @click="$router.push('/contact')">
              <v-icon small class="mr-1 ">mdi-message-text </v-icon> Contact
            </v-btn>

          </div>

          <v-card class="transparent elevation-0 d-flex justify-center align-center " >

            <v-btn @click="menuShow"  class="d-sm-none mr-8 hidden-md-and-up  transparent elevation-0 ">
              <v-icon >mdi-menu</v-icon>
            </v-btn>

            <input v-model="search" style="height: 40px" class="search-input" @keydown.enter="searchBtn" type="text"  placeholder="Search.." />

            <v-btn fab small class="white ml-3" @click="searchBtn">
              <v-icon color="black" small>mdi-magnify</v-icon>
            </v-btn>

          </v-card>

        </v-col>
      </v-row>
    </v-toolbar>
  </v-card>
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
    mainPage(){
      this.$router.push('/')
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
