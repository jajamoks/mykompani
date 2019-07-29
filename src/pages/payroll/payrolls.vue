<template>

  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="card">
        <div class="header">
          <h2>
            <strong>All</strong> Payrolls
          </h2>
        </div>
        <div class="body">
          <div class="table-responsive">
            <table class="table table-hover js-basic-example contact_list">
              <thead>
                <tr>
                  <th>Name </th>
                  <th>Role </th>
                  <th>Salary </th>
                  <th>Type </th>
                  <th class="center"> Pay Now  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(payroll, i) in payrolls" :key="i">
                  <td class=" table-img">
                    <img style="height:42px" :src="payroll.employee.employee.image" alt="">
                    {{payroll.employee.employee.first_name}} {{payroll.employee.employee.last_name}}
                  </td>
                   <td>{{payroll.employee.position}}</td>
                  <td>GHS <span style="border: 0.1px red solid;"> <span style="margin: 5px;">{{payroll.salary}}</span></span></td>
                  <td>
                    <span style="color: green;" v-if="payroll.employee.type == 'Full Time'">{{payroll.employee.type}}</span>
                    <span style="color: blue;" v-else-if="payroll.employee.type == 'Part Time'">{{payroll.employee.type}}</span>
                    <span style="color: black;" v-else-if="payroll.employee.type == 'Internship'">{{payroll.employee.type}}</span>
                  </td>
                  <td class=" center">
                    <a  class="btn btn-tbl-edit">
                      <i class="material-icons">credit_card</i>
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
  import {mapState} from "vuex";
  import axios from 'axios'
  import endpoints from '../../apis/endpoints'

  export default {
    data: () => ({}),
    methods: {},

    async mounted() {
      console.log('lop')
      this.$store.dispatch('getPayrolls', {
            id: this.currentOrganization.organization._id,
            token: this.token
          })
    },

    computed: {
      ...mapState({
        token: state => state.token,
        payrolls: state => state.payrolls,
        currentOrganization: state => state.currentOrganization
      }),

    }

  };

</script>