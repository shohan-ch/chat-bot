
const Root = {

    data(){
        return{
            name:'',
            messages:[],
            loggedIn:localStorage.getItem("name")||false
        }
    },
    methods:{
        login(){
            localStorage.setItem(this.name)
        },
        initMessage(){

        },
        sendMessages(){

        }
    }
}

const app = Vue.createApp(Root)



app.mount("#app")