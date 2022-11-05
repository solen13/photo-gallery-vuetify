<template>

  <v-card class=" d-flex justify-center  align-center full-image " v-if="this.$store.state.image.fullImageShow">

    <img  width="75%" height=" 500px" class="mt-2 "  :src="$store.state.image.fullImage"/>
    <v-btn class="ma-4 blue align-self-start" small fab  @click="exits">X</v-btn>

  </v-card>

</template>

<script>
export default {
  name: "full-image-shows",
  data(){
    return{
      news:false
    }
  },

  methods:{
    exits(){
      this.$store.commit("image/imageShow",false)
    }
  }
}
</script>

<style scoped>
  .full-image{
    position: fixed;
    width: 100%;
    height:100%;
    background-color: rgba(0, 0, 0, 0.91);
    top: 0;
    z-index: 99;
  }
</style>
