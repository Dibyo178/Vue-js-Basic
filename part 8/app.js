var app = Vue.createApp({
  data() {
    return {
      num: "",
      return: "",
      result: "",
    };
  },

  methods: {
    // handleInput(e) {
    //   // console.log(e);
    //   this.num = e.target.value;
    // },
    getDouble() {
      this.result = this.num * 2;
    },
    getSquare() {
      this.result = this.num ** 2;
    },
      reset() {
          this.num = '',
              this.result = ''
            
              
    },
  },
});

app.mount("#app");
