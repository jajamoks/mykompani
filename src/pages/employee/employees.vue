<template>

  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="card">
        <div class="header">
          <h2>
            <strong>All</strong> Employees
          </h2>
        </div>
        <div class="body">
          <div class="table-responsive">
            <table class="table table-hover js-basic-example ">
              <thead>
                <tr>
                  <th>Name </th>
                  <th>Role </th>
                  <th>Mobile </th>
                  <th>Type </th>
                  <th>Hire Date</th>
                  <th class="center"> Action </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(employee, i) in employees" :key="i">
                  <td class=" table-img">
                    <img style="height:42px" :src="employee.employee.image" alt="">
                    {{employee.employee.first_name}} {{employee.employee.last_name}}
                  </td>
                  <td>{{employee.position}}</td>
                  <td>{{employee.employee.phone}}</td>
                  <td>{{employee.type}}</td>
                  <td>{{employee.employee.created | formatDate }}</td>
                  <td class=" center">
                    <a @click="getEmployee(employee.employee._id)" class="btn btn-tbl-edit">
                      <i class="material-icons">face</i>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import {
    mapState
  } from "vuex";
  import axios from 'axios'
  import endpoints from '../../apis/endpoints'

  export default {
    data: () => ({}),
    methods: {

      async getEmployee(employeeID) {
        this.$loading('loading...')
        const {
          data: employeeResponse
        } = await axios.get(endpoints.baseUrl + endpoints.employee + employeeID + '/', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + this.token
          }
        })
        if (employeeResponse.status == "01") {
          this.$store.commit("setEmployee", employeeResponse.result)
          this.$store.dispatch('employeeEducation', {
            id: employeeID,
            token: this.token
          })
          this.$loading.close()
          this.$router.push({
            path: '/account/employee/about'
          })
        }
      },

      async getEmployees() {
        const {
          data: organizationEmployeesResponse
        } = await axios.get(endpoints.baseUrl + endpoints.organizationEmployees + this.currentOrganization
          .organization._id + '/', {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + this.token
            }
          })
        if (organizationEmployeesResponse.result) {
          this.$store.commit("setEmployees", organizationEmployeesResponse.result)
        } else {
          this.$toast(organizationEmployeesResponse.error)
        }
      },
    },

    async mounted() {
      await this.getEmployees()
    },

    computed: {
      ...mapState({
        token: state => state.token,
        employees: state => state.employees,
        currentOrganization: state => state.currentOrganization
      }),

    }

  };

</script>
