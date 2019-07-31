<template>

  <div class="tab-content">
    <div role="tabpanel" class="tab-pane active" id="project" aria-expanded="true">
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="card project_widget">
            <div class="body">
              <p class="m-t-30"> alittle about {{employee.first_name}} {{employee.last_name}}, Not coming from the
                Database</p>
              <br>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="card project_widget">
            <div class="header">
              <h2>Education</h2>
              <ul class="header-dropdown m-r--5">
                <li class="dropdown">
                  <button type="button" class="btn btn-primary" data-toggle="modal"
                    data-target="#educationModal">Add</button>

                </li>
              </ul>
            </div>
            <div class="body">
              <ul>
                <li v-for="(empEducation, i) in employeeEducation" :key="i">
                  <div>
                    <h4>{{empEducation.school}}</h4>
                  </div>
                  <div>{{empEducation.cert_type}} in {{empEducation.course}}</div>
                  <div>{{empEducation.country}}, {{empEducation.start_date | formatDate}} - {{empEducation.end_date | formatDate}}</div> <br>
                </li>
              </ul>
            </div>
            <add-education></add-education>
          </div>
        </div>

        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="card project_widget">
            <div class="header">
              <h2>Experience</h2>
            </div>
            <div class="body">
              <ul>
                <li>One year experience as Jr. Professor from April-2009 to march-2010
                  at B.
                  J. Arts College, Ahmedabad.</li>
                <li>Three year experience as Jr. Professor at V.S. Arts &amp; Commerse
                  Collage
                  from April - 2008 to April - 2011.</li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </li>
                <li>Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div role="tabpanel" class="tab-pane" id="timeline" aria-expanded="false">
    </div>
    <div role="tabpanel" class="tab-pane" id="usersettings" aria-expanded="false">
      <div class="card">
        <div class="header">
          <h2>
            <strong>Security</strong> Settings</h2>
        </div>
        <div class="body">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Username">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Current Password">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="New Password">
          </div>
          <button class="btn btn-info btn-round">Save Changes</button>
        </div>
      </div>
      <div class="card">
        <div class="header">
          <h2>
            <strong>Account</strong> Settings</h2>
        </div>
        <div class="body">
          <div class="row clearfix">
            <div class="col-lg-6 col-md-12">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="First Name">
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Last Name">
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="City">
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="E-mail">
              </div>
            </div>
            <div class="col-lg-4 col-md-12">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Country">
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <textarea rows="4" class="form-control no-resize" placeholder="Address Line 1"></textarea>
              </div>
            </div>
            <div class="col-md-12">
              <div class="form-group">
                <div class="form-check m-l-10">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" id="checkbox" name="checkbox"> Profile Visibility
                    For Everyone
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check m-l-10">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" id="checkbox1" name="checkbox"> New task
                    notifications
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check m-l-10">
                  <label class="form-check-label">
                    <input class="form-check-input" type="checkbox" id="checkbox2" name="checkbox"> New friend request
                    notifications
                    <span class="form-check-sign">
                      <span class="check"></span>
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-12">
              <button class="btn btn-primary btn-round">Save Changes</button>
            </div>
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
  import addEducation from '../../modals/add_education'
  import VueMonthlyPicker from 'vue-monthly-picker'
  export default {
    components: {
      VueMonthlyPicker,
      addEducation
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
