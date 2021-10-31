var app = Vue.createApp({
    data() {
        return {
            
            LearnInfo: {
                name: ' learning vue js 3 platform',
                github: 'https://github.com',
                html:'<a href="https://github.com">Github</a>'
            }
    
        };
    }
});

app.mount('#app');