new Vue({
    el:'#app'
    ,data:{
        greeting:　['こんにちは','Hello','カムサハムニダ']
        ,object:{
            id:{
                0:'こんにちは'
                ,1:'Hello'
                ,2:'カムサハムニダ'
                ,3:'こんにちは'
                ,4:'Hello'
                ,5:'カムサハムニダ'
            },
            n:5
        }
        }
    ,methods: {
        removeInput: function(){
            Vue.delete(this.object.id,this.object.n);
            this.object.n--;
        },
        addInput: function(){
            this.object.n++;
            Vue.set(this.object.id, this.object.n , this.greeting[this.object.n % 3]);
        } 
        
    }
})