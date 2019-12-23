var data = {
    message: 'Hello'
    ,name:'Atsushi'
}

var vm = new Vue({
    el:'#app1'
    ,data:data
    ,computed:{
        Mydata:function(){
            return this.$data;
        }
    }
})

console.log(data===vm.$data);
console.log(vm)
