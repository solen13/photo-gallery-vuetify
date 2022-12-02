<template>

    <v-hover v-slot:default="{hover}">
        <v-card v-if="data" max-width="400" height="250"  class="grey black--text" outlined  >

          <v-img  width="100%" height="100%"
                 :src="data.src.large"
                 :lazy-src="data.src.tiny"
                 alt="yükleniyor..">

            <template v-slot:placeholder>
              <v-row class="fill-height ma-0"  align="center"  justify="center">
                <v-progress-circular indeterminate color="grey-lighten-5"/>
              </v-row>
            </template>

          </v-img>

          <v-expand-transition>
            <div @click="showModal(data.src.large)" v-if="hover" class="d-flex transition-linear-out-slow-in black v-card--rai " style="height: 100%">
              <p class="white--text">{{data.photographer}}</p>
            </div>
          </v-expand-transition>
        </v-card>
   </v-hover>

</template>

<script>
export default {
  name: "searcResualt",

  props:{
    data:{
      type:Array,
      default:[]
    }

  },
  methods:{
    showModal(image){
      this.$store.commit("image/imageShow",true)
      this.$store.commit('image/fullImags',image)
    }
  }
}
</script>

<style scoped>
.v-card--rai{
  align-items:flex-end;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
