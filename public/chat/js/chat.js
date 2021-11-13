
const Root = {

    data(){
        return{
            name:'',
            loggedIn:localStorage.getItem("name")||false
        }
    },
    methods:{
        login(){
            localStorage.setItem(this.name)
        }
    }
}

const app = Vue.createApp(Root)



app.mount("#app")