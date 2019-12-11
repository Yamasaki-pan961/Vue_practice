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
    methods:{
        TextMethod : function(){
            console.log("method")
            return this.number > 3 ? '３よりうえ' : '３以下'
        }
    }
})