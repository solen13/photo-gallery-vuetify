<template>

    <v-main class="main-area"  >

      <v-row>
        <v-col cols="6" md="3"  v-for="(item,index) in sorce" :key="index">
          <imagepayload :data="item" />
        </v-col>
      </v-row>

      <v-col class="d-flex justify-center mb-5 " >
        <v-btn @click="nextpage(i)"  class="mx-1 blue " small fab  v-for="i in 5" :key="i">{{i}}</v-btn>
      </v-col>
    </v-main>

</template>

<script>

import imagepayload from "~/components/image-payload/image-sorce-banner";

export default {
  name: "index",
  data(){
    return{
      pageItem:4,
      image:null
    }
  },
  components:{imagepayload },
  computed:{
    sorce(){
      return this.$store.state.image.nextPageState
    },
  },

  methods:{
    nextpage(item){
      this.$store.dispatch('image/pelexImage',item)
    }
  },

  mounted(){
   this.$store.dispatch('image/pelexImage',1)
  }

}
</script>

<style scoped>
.main-area{
  background-color: #ffffff;
  position: relative;
}
</style>
