<template>
  <v-main>
  <v-row >

    <v-col class="white" cols="3">
      <v-list height="200 " min-width="100" class="white" >
        <v-list-item  v-for="item in categories" :key="item" class="blue " >
          <v-list-item-title @click="listsClick(item)" class="pa-2" >
            {{item.title}}
            <v-divider></v-divider>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-col>

    <v-col class="white" cols="9">
      <v-row class="px-5 py-5">
        <searc-resualt :data="categoriesBanner"/>
      </v-row>
    </v-col>

  </v-row>
  </v-main>
</template>

<script>
import VueMagnifier from "../../components/image-zoom/vue-magnifier";
import SearcResualt from "../../components/searchPage/searchResualt";
import ImageBaner from "../../components/image-banner/imageBaner";

import categories from "../../constants/categories";
export default {
  name: "index",
  components: {ImageBaner, SearcResualt, VueMagnifier},
  data(){
    return{
      categories:categories,

    }
  },
  methods:{
    listsClick(listitem){
      this.$store.dispatch('image/pelexImageGetSearchs',listitem.title)
    }
  },
  created() {
    this.$store.dispatch('image/pelexImageGetSearchs','person')
  },
  computed:{
    categoriesBanner(){
     return this.$store.state.image.searchGetImage
    }

  }
}
</script>

<style scoped>

</style>
