<template xmlns="">
  <div class="">

    <v-row  class="pa-4" >
      <searc-resualt :data="homePageData"/>

    </v-row>

    <v-col class="d-flex justify-center mb-5 " >
      <v-btn @click="nextpage(i)"  class="mx-1 blue " small fab  v-for="i in 5" :key="i">{{i}}</v-btn>

    </v-col>

 </div>
</template>

<script>
import SearcResualt from "../searchPage/searchResualt";
import SilderBar from "../silder-bar";
export default {
  name: "imageBaner",
  components: {SilderBar, SearcResualt},
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

<style scoped>
.v-card--rai{
  align-items:flex-end;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
