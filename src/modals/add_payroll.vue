<template>
  <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
    <div class="modal fade" id="payrollModal" ref="payrollModal" tabindex="-1" role="dialog"
      aria-labelledby="formModal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <form @submit.prevent="addPayroll">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="formModal">Add Payroll</h5>
              <button type="button" id="close" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <label for="password">Salary</label>
              <div class="form-group">
                <div class="form-line">
                  <input type="number" v-validate="'required'" v-model="payroll.salary" class="form-control" placeholder="5900">
                  <span style="margin-top: 0.5em;" class="text-danger">{{ errors.first('institution') }}</span>
                </div>
              </div>
              <label for="password">Employee</label>
              <div class="form-group">
                <div class="form-line">
                  <select v-validate="'required'" v-model="payroll.employee_organization_id" class="form-control" name="country">
                    <option v-for="(employee, i) in employees" :key="i" :value="employee._id">{{employee.employee.first_name}} {{employee.employee.last_name}} <img :src="employee.employee.image" ></option>
                  </select>
                  <span style="margin-top: 0.5em;" class="text-danger">{{ errors.first('country') }}</span>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-info waves-effect">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  import {
    mapState
  } from "vuex";
  import endpoints from '../apis/endpoints'

  export default {
    data: () => ({
      payroll: {
        employee_organization_id: '',
        salary: '',
      },
    }),
    methods: {
      

      async addPayroll() {
    
        this.$loading('loading...')
        try {
          const {
            data: response
          } = await axios.post(endpoints.baseUrl + endpoints.addPayroll, this.payroll, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + this.token
            }
          })
          if (response.status == '01') {
            
            await this.$store.dispatch('getPayrolls', {
            id: this.currentOrganization.organization._id,
            token: this.token
          })
          this.$toast(`Payroll Created`)
            this.$loading.close()
             $('#payrollModal').modal('hide');
          } else {
            this.$loading.close()
            this.$toast(`fill out all`)
          }
        } catch (err) {
          console.log('lot', err)
        }

      }
    },
    computed: {
      ...mapState({
        token: state => state.token,
        employees: state => state.employees,
        currentOrganization: state => state.currentOrganization
      })
    }
  };

</script>


