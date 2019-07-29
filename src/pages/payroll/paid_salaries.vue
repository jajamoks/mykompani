<template>

  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
      <div class="card">
        <div class="header">
          <h2>
            <strong>All</strong> Paid Salaries
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
                  <th>Card Number </th>
                  <th>Paid Date</th>
                  <th class="center"> </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd gradeX" v-for="(paidSalary, i) in paidSalaries" :key="i">
                  <td class=" table-img">
                    <img style="height:42px" :src="paidSalary.payroll.employee.employee.image" alt="">
                    {{paidSalary.payroll.employee.employee.first_name}}
                    {{paidSalary.payroll.employee.employee.last_name}}
                  </td>
                  <td>{{paidSalary.payroll.employee.position}}</td>

                  <td>GHS <span style="border: 0.1px green solid;"> <span
                        style="margin: 5px;">{{paidSalary.payroll.salary}}</span></span></td>
                  <td>************{{paidSalary.credit_card.card_number}}</td>
                  <td>{{paidSalary.created | formatDate}}</td>

                  <td class=" center">
                    <a class="btn btn-tbl-edit">
                      <i class="material-icons">done_all</i>
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
    methods: {},

    async mounted() {
      console.log('lop')
      this.$store.dispatch('getPaidSalaries', {
        id: this.currentOrganization.organization._id,
        token: this.token
      })
    },

    computed: {
      ...mapState({
        token: state => state.token,
        paidSalaries: state => state.paidSalaries,
        currentOrganization: state => state.currentOrganization
      }),

    }

  };

</script>
