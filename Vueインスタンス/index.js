var data = {
    message: 'Hello'
    ,name:'Atsushi'
}

var vm = new Vue({
    el:'#app1'
    ,data:data
})

console.log(data===vm.$data);
console.log(vm)
