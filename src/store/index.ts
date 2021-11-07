/* 


import Vue from 'vue'
import Vuex from 'vuex'
import { GetterTree, MutationTree, ActionTree } from "vuex"
import MySubModule from '@/store/submodule'
Vue.use(Vuex)
class State {
    userId: string | null = null;
}
const getters = <GetterTree<State, any>>{
};
const mutations = <MutationTree<State>>{
    setUserId(state, payload) {
        state.userId = payload;
    }
};
const actions = <ActionTree<State, any>>{
    fetchUserId(store) {
    }
};
export default new Vuex.Store({
    state: new State(),
    mutations: mutations,
    actions: actions,
    modules: {
        subModuleName: MySubModule,
        //other submodules
    }
})










*/


import { createStore } from 'vuex'


import axios from 'axios';

let pathFromApi = "https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json"



 export default createStore({
  state:{
    cars: []    
  },
  mutations: {

    
     // записываем в state полученную информацию
     cars(state,data){                 
      state.cars = data    
      console.log("data",data)
    },
  },
  actions: {
    // Получение всех элементов из базы данных
    getCars({state,commit}){
            
      axios({
           method: 'get',
           url: `${pathFromApi}`,
           headers: {   
            'Content-Type': 'application/json'                
            }


           })
                     
           .then(function (response) {        
           if (response.status === 200) {  
           console.log("cars",response)         
           commit('cars',response.data) }})
           .catch(function (error) {
            console.log("Ошибка получения данных с сервера!")
       });    
             }           


  },
  getters:{
    cars(state) {
      // Возвращаем погоду по запросу из приложения
      return state.cars
  }    
  }
})
