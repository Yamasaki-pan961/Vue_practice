<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{number}}</h2>
    <Like_show v-bind:number="number"></Like_show>
    <Like_show v-bind:number="number"></Like_show>
    <Like_show v-bind:number="number"></Like_show>
  </div>
</template>

<script>
import LikeHeader from './components/LikeHeader.vue'

export default {
  data: function(){
    return {
      number:14
    }
  },
  components:{
    LikeHeader
  }
}
</script>

<style>
</style>