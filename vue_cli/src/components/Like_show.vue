<template>
	<div>
		<p>いいね{{number/4}}</p>
		<button v-on:click="number++">+1</button>
		<hr>	
	</div>
</template>

<script>
export default {
  props:["number"]
}      
</script>

<style scoped>
	div{
		border:1px solid red;
	}
</style>