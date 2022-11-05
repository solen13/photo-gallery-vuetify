<template>
  <v-card class=" full-image " v-if="this.$store.state.image.menuShow">

     <v-btn  fab class="red align-self-end ma-2" @click="exits">X</v-btn>

      <v-btn  class="mx-1 blue ">
        <v-icon small class="mr-2 ">mdi-home</v-icon>Home
      </v-btn>

      <v-btn class="mx-1 blue" large>
        <v-icon class="mr-2"> mdi-dialpad</v-icon>Categories
      </v-btn>

      <v-btn class="mx-1 blue">
        <v-icon small class="mr-2">mdi-message-text </v-icon> Contact
      </v-btn>


  </v-card>
</template>

<script>

export default {
  name: "res-menu",
  components: {},
  methods:{
    exits(){
      this.$store.commit('image/menuShows',false)
    }
  }
}
</script>

<style scoped>
.full-image{
  position: fixed;
  width: 50%;
  height:100%;
  background-color: rgba(0, 0, 0, 0.91);
  top: 0;
  z-index: 99;
  display: flex;
  flex-flow: column;
  gap: 15px;

}
</style>
