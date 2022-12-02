<template>

  <v-list height="200 " min-width="100" class="white" >
    <v-list-item  v-for="item in categories" :key="item" class="blue " >
      <v-list-item-title @click="listsClick(item)" class="pa-2" >
        {{item.title}}
        <v-divider></v-divider>
      </v-list-item-title>
    </v-list-item>
  </v-list>

</template>

<script>
import categories from "../../constants/categories";
export default {
  name: "silder-bar",


  data(){
    return{
      categories:categories,
    }
  },methods:{
    listsClick(listitem){
      this.$store.dispatch('image/pelexImageGetSearchs',listitem.title)

    }
  }

}
</script>

<style scoped>

</style>
