var app = Vue.createApp({
    data() {
        return {
            count: 0,
        }
         
        },

        methods : {
             getCurrentTime(){
                let ct = new Date();
                return ct;
            },
            increase(evt,amount) {
                this.count = this.count + amount;
                console.log(evt)
                // this.count++;
            }, decrease(amount) {
                if (this.count >0 ) {
                   this.count=this.count - amount;
                    // this.count--;
                }

            },
            test(ev) {
                console.log('test')
                console.log(ev)
            }
        }
    
})

app.mount('#app');