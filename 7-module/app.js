var app = Vue.createApp({
    data() {
        return {
            name:""
        }
         
        },

        methods : {
            handleKeyup(e) {
                // console.log(e.target.value)
                this.name=e.target.value
            },
            handleSubmitForm() {
                console.log('submit form')
                // console.log(e)
                // e.preventDefault()
            },
            cardClick(e) {
                console.log(e);
                console.log('cardClick')
            },
            handleViewClick(e) {
                console.log(e);
                console.log('viewClick');
                // e.stopPropagation();
            }
        }
    
})

app.mount('#app');