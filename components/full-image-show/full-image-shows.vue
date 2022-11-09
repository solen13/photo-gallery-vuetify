<template>

  <v-card  v-if="isModalShow" class="d-flex justify-center align-center full-image " outlined rounded>

    <vue-magnifier class="image"  :src=$store.state.image.fullImage :src-large=$store.state.image.fullImage >

      <template v-slot:placeholder>
        <v-row class="fill-height ma-0"  align="center"  justify="center">
          <v-progress-circular indeterminate color="grey-ligften-5"/>
        </v-row>
      </template>

    </vue-magnifier>

    <v-btn  class="ma-4 red exit-btn " small fab  @click="closeModal">X</v-btn>

  </v-card>

</template>

<script>
import VueMagnifier from "../image-zoom/vue-magnifier";
export default {
  name: "full-image-shows",
  components: {VueMagnifier},

  methods:{
    closeModal(){
      this.$store.commit("image/imageShow",false)
    }
  },

  computed:{
    isModalShow(){
      return this.$store.state.image.fullImageShow
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
  .exit-btn{
    position: absolute;
    top: 0;
    right: 0;
  }

</style>
