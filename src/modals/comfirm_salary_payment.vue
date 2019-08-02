<template>
  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
    <div class="modal fade" id="paidSalaryModal" ref="paidSalaryModal" tabindex="-1" role="dialog"
      aria-labelledby="formModal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="formModal">Comfrim Salary payment </h5>
            <button type="button" id="close" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <label for="password">Employee: <strong>{{comfirmPaidSalary.employee.employee.first_name}}
                {{comfirmPaidSalary.employee.employee.last_name}}</strong></label> <br />
            <label for="password">Position: <strong>{{comfirmPaidSalary.employee.position}}</strong></label> <br />
            <label for="password">Employment Type: <strong>{{comfirmPaidSalary.employee.type}}</strong></label> <br />
            <br />
            <label for="password">Salary: <strong style="color: red">GHS {{comfirmPaidSalary.salary}}</strong></label>
            <br />
          </div>
          <div class="modal-footer">
            <button type="submit" @click="addPaidSalary(comfirmPaidSalary._id)"
              class="btn btn-info waves-effect">Comfirm Payment</button>
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
  import endpoints from '../apis/endpoints'

  export default {
    data: () => ({}),
    methods: {

      async addPaidSalary(payrollID) {
        this.$loading('loading...')
        const _data = {
          payroll_id: payrollID,
          credit_card_id: '5d3882925b64c63305c28b66'
        }
        const {
          data: response
        } = await axios.post(endpoints.baseUrl + endpoints.addPaidSalary, _data, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + this.token
          }
        })
        if (response.status == "01") {
          this.$store.dispatch('getPaidSalaries', {
            id: this.currentOrganization._id,
            token: this.token
          })
          this.$loading.close()
          this.$toast(
            `${this.comfirmPaidSalary.employee.employee.first_name} ${this.comfirmPaidSalary.employee.employee.last_name} has been paid`
            )
          $('#paidSalaryModal').modal('hide');
          this.$router.push({
            path: '/account/payrolls/paid-salaries'
          })
        }
      },

    },

    computed: {
      ...mapState({
        token: state => state.token,
        comfirmPaidSalary: state => state.comfirmPaidSalary,
        currentOrganization: state => state.currentOrganization.organization
      }),

    }

  };

</script>
