Vue.createApp({
    data(){
        return{
            TotalNumber:0,
            TextResult:'',
            debounce: null
        }
    },
    methods:{
        PlusFive(){
            this.TotalNumber = this.TotalNumber +5
            console.log(this.TotalNumber)
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                this.TotalNumber = 0
                console.log('clear')
            }, 5000);
        },
        Plusone(){
            this.TotalNumber = this.TotalNumber +1
            console.log(this.TotalNumber)
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                this.TotalNumber = 0
                console.log('clear')
            }, 5000);
        }
    },
    watch:{
        TotalNumber(newNumber){
            if(newNumber > 37){
                this.TextResult = 'Too much!'
            }
            if(newNumber < 37){
                this.TextResult = 'Not there yet'
            }
            if(newNumber == 37){
                alert('congrats')
            }   
        }
    }
    }).mount('#assignment')