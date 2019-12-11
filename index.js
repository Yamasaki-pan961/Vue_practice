var app = new Vue({
    el: '#app',
    data: {
        x:0,
        y:0
    },

    methods:{
        MousePoint: function(event , n){
            this.x = event.clientX *n;
            this.y = event.clientY*n;

        }
    }
})