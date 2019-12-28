Vue.component('Like',{
    data:{
        number:12
    },
    template:'<p>いいね{{number}}</p>'
})
new Vue({
    el:'#app'

})