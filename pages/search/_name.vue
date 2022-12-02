<template>
  <v-main class="white main">

      <v-row  class="pa-4" >
        <v-col v-for="(item,index) in search" :key="index">
          <searc-resualt :data="item"/>
        </v-col>
      </v-row>

  </v-main>
</template>


<script>
import FullImageShows from "../../components/full-image-show/full-image-shows";
import SearcResualt from "../../components/image-payload/image-sorce-banner";
export default {
  name: "index",
  data(){
    return{
      search:null
    }
  },
  components: {SearcResualt, FullImageShows },

   methods:{

   async datas(){
      const apiKey='563492ad6f91700001000001c274acf928a140efb99b7f5a4c54dd6c'
      const data = await fetch(`https://api.pexels.com/v1/search?query=${this.$route.params.name}`,{method:"GET",
        headers:{
          Accept:"application/json",
          Authorization:apiKey
        }
      })
      const res= await data.json()
    this.search= res.photos
    }
   },
  created() {
    this.datas()

  }
}
</script>

<style scoped>
.main{
  position: relative;
}

</style>
