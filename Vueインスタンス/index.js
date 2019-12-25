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
new Vue({
    el:'#app4',
    data:{
        name:'Yamasaki'
    },
    beforeCreate: function(){
        console.log('beforeCreate');
    },
    created:function(){
        console.log('Created');
    },
    beforeMount:function(){
        console.log('beforeMount');
    },
    mounted:function(){
        console.log('mounted');
    },
    beforeUpdate:function() {
        console.log('beforeUpdate');
    },
    updated:function(){
        console.log('updated');
    },
    beforeDestroy: function(){
        console.log('beforeDestroy');
    },
    destroyed:function(){
        console.log('destroyed');
    },

    methods:{
        destroy_app1:function(){
            this.$destroy();
        },
        changeName:function(){
            this.name+='変わったよ';
            console.log('変える処理');
        }
    }
})