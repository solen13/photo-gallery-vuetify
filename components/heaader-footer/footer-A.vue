<template>

 <v-footer height="200" width="100%" class="blue">
   <v-row class="d-flex justify-lg-space-between align-center" >

     <v-col cols="6" class="d-flex justify-lg-space-between ">
        <p class="mt-16 display-1">Photo Gallery</p>
       <v-list  class="transparent  display-1" >

         <v-list-item-title>   Home </v-list-item-title>
         <v-list-item-title>   Categories </v-list-item-title>

       </v-list>
     </v-col>

     <v-col  cols="4"  >
       <v-list class="transparent  display-1">

         <v-list-item-title>  About </v-list-item-title>
         <v-list-item-title>  Api </v-list-item-title>
         <v-list-item-title>  Alert </v-list-item-title>

       </v-list>
     </v-col>

   </v-row>
  </v-footer>


</template>

<script>
export default {
  name: "footer"
}
</script>

<style scoped>

</style>
