var data = {
    message: 'Hello'
    ,name:'Atsushi'
}

var vm = new Vue({
    data:data
    ,computed:{
        Mydata:function(){
            return this.$data;
        }
    }
})

vm.$mount('#app1')

new Vue({
    el:'#app2'
    ,data:{
        name:'atsushi'
    }
    ,template:'<h1>{{name}}</h1>'
})