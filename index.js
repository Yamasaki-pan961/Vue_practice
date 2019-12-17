var app = new Vue({
    el: '#app',
    data: {
        number:0,
        n:0
    },
    
    computed: {
        TextComputed: function(){
            console.log("computed");
            return this.number > 3 ? '３よりうえ' : '３以下'
        }
    },
    watch:{
        number: function(){
            var that=this;//なんかthisは使えんから別の奴にする
            if(that.number == 1){
                setTimeout(function(){
                    that.number = 0;
                },3000)
            }
        }
    }
})