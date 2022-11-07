<template>

    <v-main class="main-area"  >
          <image-banner  />
    </v-main>

</template>

<script>
import ImageBanner from "@/components/image-banner/imageBaner";
export default {
  name: "index",
  components:{  ImageBanner },
}
</script>

<style scoped>
.main-area{
  background-color: #ffffff;
  position: relative;
}
</style>
