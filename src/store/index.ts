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

type carsObject={id:number,title:string,description:string,year:number,color:string,price:number,status:string}

 export default createStore({
  state:{
    cars: [] as Array<carsObject>    
  },
  mutations: {

    
     // записываем в state полученную информацию
     cars(state,data){                 
      state.cars = data      
    },

    deleteCar(state,id){                 
           // находим - какой индекс у удаляемого элемента в массиве  из state
           const index = state.cars.findIndex(a => a.id === id);
              
           //     console.log("delete element index",index);
                // в массиве из state teams начиная с позиции 1 удалить 1 элемент
                state.cars.splice(index, 1);  
    }
  },
  actions: {
    // Получение всех элементов из базы данных
    getCars({commit}){
            
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
             },
       deleteCar({commit},id){
        // тут запрос axios должен быть с методом delete 
        // не добавляю чтобы не нарушать реальный массив на сервере
        // (если соответствующий метод delete подготовлен на backend и настроен на передающийся id)
        // Если нет- нужно изменить state и передать полностью новую версию state на сервер
        // Удаление машины из state
    
       /*  
   axios({
           method: 'delete',
           url: `${pathFromApi}` + "/" + id,,
           headers: {   
            'Content-Type': 'application/json'                
            }


           })
                     
           .then(function (response) {        
           if (response.status === 200) {  
           console.log("cars",response)         
           commit('deleteCar',response.data) }})
           .catch(function (error) {
            console.log("Ошибка!")
       }); 
            */


        commit('deleteCar',id)

       }                 


  },
  getters:{
    cars(state) {
      // Возвращаем погоду по запросу из приложения
      return state.cars
  }    
  }
})
