Vue.component('Like',{
    data:　function(){
        return {
            number:1
        }
    },
    template:'<div><p>いいね{{number}}個</p><button v-on:click="number++">+1</button><hr></div>'
})

new Vue({
    el:'#app'
})

new Vue({
    el:'#app1'
})