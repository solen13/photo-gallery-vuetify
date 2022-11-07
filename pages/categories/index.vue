<template>
 <div>
   <vue-magnifier src="https://images.pexels.com/photos/14189051/pexels-photo-14189051.jpeg?auto=compress&cs=tinysrgb&h=350"
   src-large="https://images.pexels.com/photos/14189051/pexels-photo-14189051.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"  />

 </div>
</template>

<script>
import VueMagnifier from "../../components/image-zoom/vue-magnifier";
export default {
  name: "index",
  components: {VueMagnifier}
}
</script>

<style scoped>

</style>
