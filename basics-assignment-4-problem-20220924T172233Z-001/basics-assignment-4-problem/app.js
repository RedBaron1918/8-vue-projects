Vue.createApp({
    data(){
        return{
           InputClass:'',
           Show:true,
           InputColor:'',
           
        }
    },
    methods:{
        Change(){
            this.Show = !this.Show;
        }
    }

    }).mount('#assignment')