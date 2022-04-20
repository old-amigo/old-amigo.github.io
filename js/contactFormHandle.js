Vue.createApp({
    created(){
        console.log("Hello vue")
    },
    data: () => ({
        name: "",
        phone:"",
        email:"",
        state: null
    }),
    computed: {
        user () {
            return `Имя: "${this.name}", телефон: "${this.phone}", email: "${this.email}"`
        }
    },
    methods: {
       onSubmit() {
           axios.post('https://jsonplaceholder.typicode.com/posts',{
               data:{
                   type: "user",
                   attributes: {
                       name: this.name,
                       phone: this.phone,
                       email: this.email
                   }

               }
           }).then((r) => {
               this.state = r.status;
               setTimeout(() => {
                   this.state = null;
               }, 5000)
           }).catch((e) => {
               this.state = 500;
           })
       }
    }
}).mount(".js-form")