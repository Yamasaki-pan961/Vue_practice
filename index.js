var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        url1: "https://www.google.co.jp/",
        url2: "https://www.yahoo.co.jp/",
        title:'<h1>うんこ<h1>'
        
    },
    methods:{
        Hello: function(){
            this.message='こんちは'
            return 'HELLO'
        }
    }
    })