<template>
  <div id="app">
    <headBox></headBox>
    <router-view/>
    <!-- <Loading/> -->
    <footBox/>
  </div>
</template>

<script>
import _ from "underscore"
import "./vender/underscore.mixin.js"
import headBox from "@/components/common/head"
import footBox from "@/components/common/foot"
// import Loading from "@/components/common/Loading"
export default {
  name: 'App',
  components:{headBox,footBox}
}
</script>

<style>

</style>
