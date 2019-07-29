<template>
  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <div class="card">
        <div class="header">
          <h2>
            <strong>Add</strong> Employee</h2>
          <ul class="header-dropdown m-r--5">
            <li class="dropdown">
              <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button"
                aria-haspopup="true" aria-expanded="false">
                <i class="material-icons">more_vert</i>
              </a>
            </li>
          </ul>
        </div>
        <div class="row clearfix">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="card">
              <div class="body">
                <form @submit.prevent="addEmployee">
                  <div class="row clearfix">
                    <div class="col-md-6">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="material-icons">person</i>
                        </span>
                        <div class="form-line">
                          <input type="text" class="form-control date" v-model="employee.first_name"
                            placeholder="First Name">
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="material-icons">person</i>
                        </span>
                        <div class="form-line">
                          <input type="text" class="form-control date" v-model="employee.last_name"
                            placeholder="Last Name">
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="material-icons">mail</i>
                        </span>
                        <div class="form-line">
                          <input type="text" class="form-control date" v-model="employee.email" placeholder="Email">
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="material-icons">phone_iphone</i>
                        </span>
                        <div class="form-line">
                          <input type="text" class="form-control date" v-model="employee.phone"
                            placeholder="Mobile Number">
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="material-icons">map</i>
                        </span>
                        <div class="form-line">
                          <input type="text" class="form-control date" v-model="employee.address"
                            placeholder="Residential Address">
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <label> Role</label>
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="material-icons">face</i>
                        </span>
                        <div class="form-line">
                          <select style="width: 465px;" v-model="employee.kompani_position" class="form-control date" name="position">
                            <option value="CTO">CTO</option>
                            <option value="CEO">CEO</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Product Manager">Product Manager</option>
                          </select>
                        </div>
                      </div>
                    </div>
                     <div class="col-md-6">
                       <label> Employment Type</label>
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="material-icons">face</i>
                        </span>
                        <div class="form-line">
                          <select style="width: 465px;" placeholder="Role" v-model="employee.employment_type" class="form-control date" name="position">
                            <option value="Full Time">Full Time</option>
                            <option value="Part TIme">Part Time</option>
                            <option value="Contractor">Contractor</option>
                            <option value="Internship">Internship</option>
                            <option value="National Service">National Service</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6 imageUploader">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="material-icons">image</i>
                        </span>
                        <div class="form-line ">
                          <img v-if="employee.image != null" :src="employee.image" style="height: 150px;" class="uploading-image" />
                          <div class="row ">
                            <div class="col-md-8 ">
                              <input type="file" ref="fileInput" class="form-control date imageUploader"
                                accept="image/*" @change="imageUpload($event)">
                            </div>
                            <div class="col-md-4" v-if="employee.image != null">
                              <span @click="removeImage">
                                <i class="material-icons">cancellse</i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                      <ul class="breadcrumb breadcrumb-style ">
                        <button type="submit" class="btn btn-success waves-effect m-r-15 right">Create Employee</button>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {
    mapState
  } from "vuex";
  import endpoints from '../../apis/endpoints'

  export default {
    data: () => ({
      employee: {
        email: '',
        first_name: '',
        last_name: '',
        phone: '',
        address: '',
        image: null,
        kompani_id: '',
        kompani_position: '',
        employment_type: ''
      },
    }),
    methods: {
      removeImage() {
        this.employee.image = null
        const input = this.$refs.fileInput
        input.type = 'text'
        input.type = 'file'
      },
      imageUpload(event) {
        const image = event.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(image)
        reader.onload = event => {
          this.employee.image = event.target.result
        }
      },

      async addEmployee() {
        this.$loading('loading...')
        this.employee.kompani_id = this.currentOrganization.organization._id
        try {
          const {
            data: response
          } = await axios.post(endpoints.baseUrl + endpoints.addEmployee, this.employee, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Token ' + this.token
            }
          })
          if (response.status == '01') {
            this.$toast(`${response.profile.first_name} has been added as an employee`)
            this.$loading.close()
            this.$router.push({
              path: '/account/employees'
            })
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
        currentOrganization: state => state.currentOrganization
      })
    }
  };

</script>

<style>
  .imageUploader {
    background-color: #ffffff;
    border: 1px solid #ffffff;
  }

</style>
