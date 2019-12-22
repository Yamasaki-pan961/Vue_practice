new Vue({
    el:'#app'
    ,data:{
        agree:　['こんにちは','Hello','カムサハムニダ']
        ,object:{
            country: 'Japan'
            ,age: 19
            ,firstname:'Ataushi'
            ,famliyname:'Yamasaki'
        }
    }
    ,methods: {
        removeInput: function(){
            this.agree.shift();
        }
    },
})