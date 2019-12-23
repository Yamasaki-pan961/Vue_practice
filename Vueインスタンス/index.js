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
    data:{
        name:'atsushi'
    }
    ,template:'<h1>{{name}}</h1>'
}).$mount('#app2')