import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin:{
            success:0,
            admin:0
        },
        eid:-1
    },
    mutations: {
        IS_LOGIN(state,isLogin){
            state.isLogin = isLogin;
            localStorage.setItem("isLogin",JSON.stringify(isLogin));
        },
        GET_EID(state,eid){
            state.eid = eid;
        }
    },
    actions: {
        isLogin({ commit }, isLogin){
            commit('IS_LOGIN', isLogin);
        },
        getEid({commit},eid){
            commit('GET_EID',eid);
        }
    }
})


export default store;