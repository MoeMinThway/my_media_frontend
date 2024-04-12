import { createStore } from 'vuex'

export default createStore({
  state: {
    userData :{},
    token: '',
  },
  getters: {
    storeToken :state =>state.token, //get
    storeUserData :state =>state.userData //get
  },
  mutations: {
  },
  actions: {
    setToken  : ( {state},value ) =>state.token =value , //put
    setUserData  : ( {state},value ) =>state.userData =value //put
  },
  modules: {
  }
})
