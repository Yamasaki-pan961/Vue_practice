var data={
    number:12
}

Vue.component('Like',{
    data:　function(){
        return data;
    },
    template:'<div><p>いいね{{number}}個</p><button v-on:click="number++">+1</button><hr></div>'
})

new Vue({
    el:'#app'
})