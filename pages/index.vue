<template>

<v-main class="cc">


</v-main>
</template>

<script>


export default {
  name: "index",
  components:{},
  data(){
    return{
      drawer:false,
      images:null,
      src:null,
      searchResualt:null,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    }
  },
  mounted() {


  },
  created() {


  },

  watch:{

  },
  methods:{
   async show(){
      const apiKey='563492ad6f91700001000001c274acf928a140efb99b7f5a4c54dd6c'
     const data =await  fetch(this.$store.state.image.imageSrc,{method:"GET",
     headers:{
       Accept:"application/json",
       Authorization:apiKey
     }
     })
     const res=await  data.json()
     this.images=res.photos
     console.log(res)
   },
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
    next(){


    },
    ugur(e){
     console.log('ali',e)
    }

  }
}
</script>

<style scoped>
.cc{

  background-color: #ffffff;
}
.imgs:hover{
  opacity: 0.5;
}
.card{
  position: absolute;
 bottom: 0;

}

</style>
