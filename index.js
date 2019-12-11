var app = new Vue({
    el: '#app',
    data: {
        number:0,
        n:0
    },

    methods:{
        CountUp: function(){
            this.n++;
        }
    }
})