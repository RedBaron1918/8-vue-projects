Vue.createApp({
    data(){
        return{
          InputValue:'',
          Values:[],
          Visible:true,
          text:'Hide'
           
        }
    },
    methods:{
        AddItem(){
            this.Values.push(this.InputValue)
            this.InputValue = ''
            console.log(this.Values)
        },
        ShowItems(){
            this.Visible = !this.Visible;
            if(this.Visible){
                this.text = 'Hide'
            }else{
                this.text = 'Show List'
            }

        }
    }

    }).mount('#assignment')