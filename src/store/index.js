import Vuex from "vuex";
import mutations from './mutations'
import actions from './actions'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const createStore = () => {
  return new Vuex.Store({
    state: { 
        logedIn: false,
        token: {},
        currentOrganization: {},
        employees: [],
        employee: {},
        employeeEducation: [],
        payrolls: [],
        paidSalaries: [],
        comfirmPaidSalary: {}
    },
    mutations: mutations,
    actions: actions,
    plugins: [createPersistedState()]
  });
};

export default createStore;
