<template>
  <v-card  v-if="isShowMenu" class="full-image ">

     <v-btn  fab class="red align-self-end ma-2" @click="exits()">
       <v-icon large v-text="'mdi-close'"/>
     </v-btn>

      <v-btn  class="mx-1 blue " @click="exits('/')">
        <v-icon small class="mr-2 ">mdi-home</v-icon>Home
      </v-btn>

      <v-btn class="mx-1 blue" large @click="exits('/categories')">
        <v-icon class="mr-2"> mdi-dialpad</v-icon>Categories
      </v-btn>

      <v-btn class="mx-1 blue" @click="exits('/contact')">
        <v-icon small class="mr-2">mdi-message-text </v-icon> Contact
      </v-btn>

  </v-card>
</template>

<script>

export default {
  name: "res-menu",
  components: {},
  methods:{
    exits(e){
      this.$store.commit('image/menuShows',false)
      this.$router.push(e)
    }
  },
  computed:{
    isShowMenu(){
      return this.$store.state.image.menuShow
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
