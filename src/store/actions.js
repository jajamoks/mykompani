import axios from 'axios'
import endpoints from '../apis/endpoints'

const actions = {

  async employeeEducation({commit}, employeeD) {
    try {
      const {
        data: getEmployeeEducationResponse
      } = await axios.get(endpoints.baseUrl + endpoints.employeeEducation + employeeD.id, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + employeeD.token
        }
      })
      if (getEmployeeEducationResponse.status == '01') {
        commit("setEmployeeEducation", getEmployeeEducationResponse.result)
      }
    } catch (error) {}
  },

  async getPayrolls({commit}, organizationD) {
    const {
      data: payrollResponse
    } = await axios.get(endpoints.baseUrl + endpoints.payrolls + organizationD.id + '/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + organizationD.token
        }
      })
    if (payrollResponse.result) {
      commit("setPayrolls", payrollResponse.result)
    } else {
      this.$toast('Payrolls')
    }
  },

  async getPaidSalaries({commit}, organizationD) {
    const {
      data: paidSalariesResponse
    } = await axios.get(endpoints.baseUrl + endpoints.orgainzationPaidSalaries + organizationD.id + '/', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token ' + organizationD.token
        }
      })
    if (paidSalariesResponse.result) {
      commit("setPaidSalaries", paidSalariesResponse.result)
    } else {
      console.log('err')
    }
  },


}

export default actions;
