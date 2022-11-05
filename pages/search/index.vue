<template>
  <v-main class="white main">
      <FullIsmageShows/>
      <v-row  class="pa-4" >

        <v-Col
          v-for="n in $store.state.image.searchGetImage "
          cols="6"
          sm="4"
          md="3"
          lg="2"
          :key="n">

          <v-hover v-slot:default="{hover}">

            <v-card width="200" height="150" class="grey black--text "  outlined  >

              <v-img
                width="200" height="150"
                :src="n.src.large"
                :lazy-src="n.src.tiny"
                alt="yükleniyor..">

                <template v-slot:placeholder>

                  <v-row class="fill-height ma-0"  align="center"  justify="center">
                    <v-progress-circular indeterminate color="grey-ligften-5"/>
                  </v-row>

                </template>

              </v-img>

              <v-expand-transition>

                <div @click="shows(n.src.original)" v-if="hover" class="d-flex transition-linear-out-slow-in black v-card--rai " style="height: 100%">

                  <a :href="n.src.original" download> indir</a>

                  <v-btn> copy</v-btn>

                  <v-btn>
                    <v-icon>mdi-home</v-icon>
                  </v-btn>

                </div>

              </v-expand-transition>

            </v-card>
          </v-hover>
        </v-Col>

      </v-row>

  </v-main>

</template>

<script>


import FullImageShows from "../../components/full-image-show/full-image-shows";
export default {
  name: "index",
  components: {FullImageShows },
  methods:{
    shows(e){
      this.$store.commit("image/imageShow",true)
      alert(e)
      this.$store.commit('image/fullImags',e)

    }
  },
  created() {
    this.$store.dispatch('image/pelexImageGetSearchs',)

  },
}
</script>

<style scoped>
.main{
  position: relative;
}
.v-card--rai{
  align-items:flex-end;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
