

var socket = io();

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
            //get thereds from server

        },
        sendMessages(){

        }
    }
}

const app = Vue.createApp(Root)



app.mount("#app")