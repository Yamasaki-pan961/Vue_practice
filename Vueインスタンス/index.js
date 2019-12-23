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
