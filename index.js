var app = new Vue({
    el: '#app',
    data: {
        number:0
    },
    
    computed: {
        Text1: function(){
            return this.number > 3 ? '３よりうえ' : '３以下'
        }
    }
})