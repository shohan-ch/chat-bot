

const Login ={
    data(){
        return{
            name:''
        }
    },
    template:`
        <input v-mode="name" type="text" placeholder="username"/>
    `,
    methods:{
        login(){
            localStorage.setItem(this.name)
        }
    }
}
const Root = {
    components:{
        Login
    },
    data(){
        return{
            loggedIn:localStorage.getItem("name")||false
        }
    }
}

const app = Vue.createApp(Root)



app.mount("#app")