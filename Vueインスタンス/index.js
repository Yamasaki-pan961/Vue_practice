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

new Vue({
    el:'#app3'
    ,data:{
        name:'atsushi'
    }
    ,render:function(h){
        return h('h1','こんにちは'+this.name);
    }
})

var dir = document.createElement(div);
console.log(dir);
console.dir(dir);
console.log(document);
console.dir(document);