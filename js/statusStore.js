/**
 * Created by beck on 2016/10/2.
 */

const store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment:state => state.count++,
        decrement:state => state.count--,
        change(state,value){
        state.count = value;
}
    },
    strict:true
})

const app = new Vue({
    el:'#app',
    computed:{
        count :{
         get()
        {
            return store.state.count;
        }
//        set(value){
//        this.$store.commit("change",value);
//}
        }
    },
    store,
    methods:{
        incre(){
            store.commit("increment");
        },
        decre(){
            store.commit("decrement");
        }
    }
})
