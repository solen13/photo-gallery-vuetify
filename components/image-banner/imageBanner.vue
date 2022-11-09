<template>
  <div class="ugur">

    <v-row  class="pa-4" >
      <search-result :data="homePageData"/>
    </v-row>

    <v-col class="d-flex justify-center mb-5 " >
      <v-btn @click="nextpage(i)"  class="mx-1 blue " small fab  v-for="i in 5" :key="i">{{i}}</v-btn>
    </v-col>

 </div>
</template>

<script>
import SearchResult from "../searchPage/image-sorce-banner";
import SliderBar from "../silde-bar/silde-bar";
export default {
  name: "imageBaner",
  components: {SearchResult, SliderBar},

  data(){
    return{
     itemImage:null
    }
  },

  methods:{

    shows(e){
      this.$store.commit("image/imageShow",true)
      alert(e)
      this.$store.commit('image/fullImags',e)

    },

    nextpage(e){
       this.$store.dispatch('image/pelexImage',e)
    },

  },

  computed:{

    homePageData(){
      return this.$store.state.image.nextPageState
    },

  },

  mounted() {
    this.$store.dispatch('image/pelexImage',1)
  }

}
</script>

<style scoped>  </style>
