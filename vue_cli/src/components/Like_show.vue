<template>
	<div>
		<p>いいね{{totalNumber/4}}</p>
		<button v-on:click="number++">+1</button>
		<hr>	
	</div>
</template>

<script>
export default {
  props:["totalNumber"]
}      
</script>

<style scoped>
	div{
		border:1px solid red;
	}
</style>