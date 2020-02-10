var calc = new Vue({
        el: '#calc',
        data: {
          total: 0
        },
        methods: {
            controlNum: function(number) {
            return this.total += number;
            },
            clear: function() {
            return this.total = 0;
            },
            equal: function() {
             let equal = this.total;
             return this.total = eval(equal);
            }         
        }
    });
