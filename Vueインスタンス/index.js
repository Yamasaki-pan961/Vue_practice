var vm = new Vue({
    el:'#app1'
    ,data:{
        message:'unko'
    }
})

new Vue({
    el:'#app2'
    ,data:{
        message:'tinko'
    }
    ,methods:{
        changeMessage: function(){
            vm.message = 'インスタンス2から変更した'
        }
    }
})