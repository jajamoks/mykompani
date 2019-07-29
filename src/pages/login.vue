<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <form class="login100-form validate-form" @submit.prevent="userLogin">
          <span class="login100-form-title p-b-45">
            Check In
          </span>
          <div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
            <input class="input100" type="text" v-model="user.email" v-validate="'required|email'" name="email" placeholder="Email">
            <span class="focus-input100"></span>
            <span style="margin-top: 0.5em;" class="text-danger">{{ errors.first('email') }}</span>
          </div>
          <div class="wrap-input100 validate-input" data-validate="Password is required">
            <input class="input100" type="password" v-model="user.password" v-validate="'required|min:6'" name="pass" placeholder="Password">
            <span class="focus-input100"></span>
            <span style="margin-top: 0.5em;" class="text-danger">{{ errors.first('pass') }}</span>
          </div>
          <div class="container-login100-form-btn">
            <button type="submit" class="login100-form-btn"> check in </button>
          </div>
          <div class="text-center p-t-45 p-b-20">
            <span class="txt2">
              <div>
                <a href="forgot-password.html" class="txt1">
                  forgot password?
                </a>
              </div>
            </span>
          </div>
        </form>
        <div class="login100-more" style="background-image: url('../../../static/assets/images/pages/bg-01.png');">
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  import axios from 'axios'
  import endpoints from '../apis/endpoints'

  export default {
    data: () => ({
      user: {
        email: '',
        password: ''
      }
    }),
    methods: {
      async userLogin() {
        this.$loading('loading...')
        try {
          const {
            data: loginResponse
          } = await axios.post(endpoints.baseUrl + endpoints.login, this.user, {
            headers: {
              'Content-Type': 'application/json'
            }
          })
          if (loginResponse.status == '01') {
            
            const {
              data: myOrganizationsResponse
            } = await axios.get(endpoints.baseUrl + endpoints.myOrganizations + loginResponse.profile._id + '/', {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + loginResponse.token
              }
            })
            if (myOrganizationsResponse.result.length == 1) {
              this.$store.commit("setToken", loginResponse.token)
              this.$store.commit("setCurrentOrganization", myOrganizationsResponse.result[0])
              this.$loading.close()
              this.$router.push({ path: '/account/employees' })
            }

          } else {
             this.$loading.close()
            this.$toast(loginResponse.msg)
          }
        } catch (err) {
          console.log('lot', err)
        }

      }
    }
  };

</script>
