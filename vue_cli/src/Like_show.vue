<template>
	<div>
		<p>いいね{{number}}</p>
		<button v-on:click="number++">+1</button>
		<hr>	
	</div>
</template>

<script>
export default {
	data:function(){
		return{
			number:5
		}
	}
}      
</script>