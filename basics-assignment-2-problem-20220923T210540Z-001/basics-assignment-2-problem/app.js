Vue.createApp({
    data(){
        return{
          FirstText:'',
          SecondText:'',
          SubmitText:'',
        }
    },
    methods:{
        GetAlert(){
          alert('Very cool alert')
        },
        GetText(){
            this.SubmitText = this.$refs.myInput.value;
        }
    },

    
    
    
    }).mount('#assignment')