<template>
    <div  class="col-xs-12 col-sm-6 col-md-6 col-lg-6">
              <div class="modal fade" id="educationModal" ref="employeeEducation" tabindex="-1" role="dialog" aria-labelledby="formModal"
                aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <form @submit.prevent="addEducation">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="formModal">Add Education</h5>
                        <button type="button" id="close" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <label for="password">Collage / Institution</label>
                        <div class="form-group">
                          <div class="form-line">
                            <input type="text" v-validate="'required'" v-model="education.institution" class="form-control"
                              placeholder="University Of Ghana" name="institution">
                               <span style="margin-top: 0.5em;" class="text-danger">{{ errors.first('institution') }}</span>
                          </div>
                        </div>
                        <label for="password">Country</label>
                        <div class="form-group">
                          <div class="form-line">
                            <select v-validate="'required'" v-model="education.country" class="form-control" name="country">
                              <option value="Ghana">Ghana</option>
                              <option value="USA">USA</option>
                              <option value="Togo">Togo</option>
                            </select>
                            <span style="margin-top: 0.5em;" class="text-danger">{{ errors.first('country') }}</span>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-8">
                            <label for="password">Course</label>
                            <div class="form-group">
                              <div class="form-line">
                                <select v-validate="'required'" v-model="education.course" class="form-control" name="course">
                                  <option value="0">Choose your course</option>
                                  <option value="Computer Science">Computer Science</option>
                                  <option value="Accounting">Accounting</option>
                                  <option value="Law">Law</option>
                                </select>
                                <span style="margin-top: 0.5em;" class="text-danger">{{ errors.first('course') }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <label for="password">Cert Type</label>
                            <div class="form-group">
                              <div class="form-line">
                                <select v-validate="'required'" v-model="education.cert_type" class="form-control" name="cert_type">
                                  <option value="High School">High School</option>
                                  <option value="Degree">Degree</option>
                                  <option value="Masters">Masters</option>
                                </select>
                                <span style="margin-top: 0.5em;" class="text-danger">{{ errors.first('cert_type') }}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label for="password">Admission Date</label>
                            <div class="form-group">
                              <div class="form-line">
                                <vue-monthly-picker v-validate="'required'" v-model="education.start_date" name="start_date"> </vue-monthly-picker>
                                <span style="margin-top: 0.5em;" class="text-danger">{{ errors.first('start_date') }}</span>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <label for="password">Graduration Date</label>
                            <div claVueMonthlyPickerss="form-group">
                              <div class="form-line">
                                <vue-monthly-picker v-validate="'required'" v-model="education.end_date" name="end_date"> </vue-monthly-picker>
                                <span style="margin-top: 0.5em;" class="text-danger">{{ errors.first('end_date') }}</span>
                              </div>
                            </div>
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
  import {
    mapState
  } from "vuex";
  import axios from 'axios'
  import endpoints from '../apis/endpoints'
  import VueMonthlyPicker from 'vue-monthly-picker'
  export default {
    components: {
      VueMonthlyPicker
    },
    data: () => ({
      education: {
        start_date: '',
        end_date: '',
        cert_type: '',
        country: '',
        course: '',
        institution: '',
        employee_id: ''
      },
    }),

    methods: {

      async addEducation() {
        this.$loading('loading...')
        this.education.start_date = this.education.start_date._i
        this.education.end_date = this.education.end_date._i
        this.education.employee_id = this.employee._id

        try {
          const {
            data: addEducationResponse
          } = await axios.post(endpoints.baseUrl + endpoints.addEducation, this.education, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + this.token
            }
          })
          this.$store.dispatch('employeeEducation', {id: this.employee._id, token: this.token})
          $('#educationModal').modal('hide');
          this.$loading.close()
        } catch (error) {
          this.$loading.close()
        }
      }
    },
    computed: {
      ...mapState({
        token: state => state.token,
        employee: state => state.employee.employee,
        employeeEducation: state => state.employeeEducation
      }),

    }

  };

</script>
