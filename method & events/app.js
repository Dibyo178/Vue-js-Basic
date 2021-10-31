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
            increase(amount) {
                // this.count=this.count + 1;
                this.count=this.count+amount;
            }, decrease(amount) {
                if (this.count >0 ) {
                    // this.count=this.count - 1;
                    this.count=this.count-amount;
                }
                
            }
        }
    
})

app.mount('#app');