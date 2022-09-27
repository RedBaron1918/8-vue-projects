Vue.createApp({
data(){
    return{
        Name:'',
        Age:null,
        random: 0,


    }
},
methods:{
    GetRandom(){
       this.random = Math.floor(Math.random() * 2);
       console.log(this.random)
    }
},
computed:{
    // AgePlus(){
    //     return this.Age + 5;
    // }
}

}).mount('#assignment')