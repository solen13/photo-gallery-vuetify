<template>

  <v-card class=" d-flex justify-center  align-center full-image " outlined rounded v-if="this.$store.state.image.fullImageShow">

    <vue-magnifier

       class="image"
      :src=$store.state.image.fullImage
      :src-large=$store.state.image.fullImage
    >

      <template v-slot:placeholder>

        <v-row class="fill-height ma-0"  align="center"  justify="center">
          <v-progress-circular indeterminate color="grey-ligften-5"/>
        </v-row>

      </template>


    </vue-magnifier>


    <v-btn  class="ma-4 red align-self-start" small fab  @click="exits">X</v-btn>

  </v-card>

</template>

<script>
import VueMagnifier from "../image-zoom/vue-magnifier";
export default {
  name: "full-image-shows",
  components: {VueMagnifier},
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
