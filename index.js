var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        url1: "https://www.google.co.jp/",
        attribute:"href",
        YahooObject:{
            href:"https://www.yahoo.co.jp/",
            id:69
        }   
    },

    methods:{
        Hello: function(){
            this.message='こんちは'
            return 'HELLO'
        }
    }
    })