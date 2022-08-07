const app = Vue.createApp({
    // data, functions
    data(){
        return{
            text: 'Repository owner: JAN NICOLE CASILLAN',
            info: 'I am doing nothing.',
            count: 0
        }
    },
    methods: {
        changeInfo(info){
            this.info = info
        }
    }
})

app.mount('#app')