<template>

    <v-main class="cc"  >

          <image-baner  />

    </v-main>

</template>

<script>
import FullImageShows from "@/components/full-image-show/full-image-shows";
import ImageBaner from "@/components/image-banner/imageBaner";
import SilderBar from "../components/silder-bar";
export default {
  name: "index",
  components:{SilderBar, ImageBaner },
}
</script>

<style scoped>
.cc{

  background-color: #ffffff;
  position: relative;


}

</style>
