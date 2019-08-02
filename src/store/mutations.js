const mutations = {
  setToken(state, data) {
    state.token = data,
    state.logedIn = true
  },
  setLogout(state, data) {
    state.token = data,
    state.logedIn = false,
    state.currentOrganization = {},
    state.employees = [],
    state.employee = {},
    state.employeeEducation = [],
    state.payrolls = [],
    state.paidSalaries = []
  },
  setCurrentOrganization(state, data) {
    state.currentOrganization = data
  },
  setEmployees(state, data) {
    state.employees = data
  },
  setEmployee(state, data) {
    state.employee = data
  },
  setEmployeeEducation(state, data) {
    state.employeeEducation = data
  },
  setPayrolls(state, data) {
    state.payrolls = data
  },
  setPaidSalaries(state, data) {
    state.paidSalaries = data
  },
  setComfirmPaidSalary(state, data) {
    state.comfirmPaidSalary = data
  },



}

export default mutations;
