var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello World!',
        number: 4,
        OK: true
    },
    methods:{
        Hello: function(){
            return 'HELLO!';
        }
    }
    })