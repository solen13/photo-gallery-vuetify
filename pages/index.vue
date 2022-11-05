<template>

    <v-main class="cc">

          <FullImageShows />
          <image-baner/>
          <res-menu/>

    </v-main>
</template>

<script>




import FullImageShows from "@/components/full-image-show/full-image-shows";
import ImageBaner from "@/components/image-banner/imageBaner";
import ResMenu from "../components/respons-menu/res-menu";
export default {
  name: "index",
  components:{ResMenu, ImageBaner, FullImageShows, },
  data(){
    return{
     full:false
    }
  },
  mounted() {


  },
  created() {


  },

  watch:{

  },
  methods:{


    page1(){

      let src='https://api.pexels.com/v1/curated?page=3&per_page=40'
      this.$store.commit('image/src',src)
     this.show()
      console.log(this.searchResualt)
    },
    page2(){
      let src='https://api.pexels.com/v1/curated?page=6&per_page=40'
      this.$store.commit('image/src',src)
      this.show()
    },
    page3(){
      let src='https://api.pexels.com/v1/search/?page=2&per_page=80&query=car'
      this.$store.commit('image/src',src)
      this.show()
    },
    search(){
      let src='https://api.pexels.com/v1/search?query='+this.searchResualt+'&per_page=80'
      this.$store.commit('image/src',src)
      this.show()
    },

  }
}
</script>

<style scoped>
.cc{

  background-color: #ffffff;
  position: relative;
}

</style>
