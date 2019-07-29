<template>
  <div>
    <aside id="leftsidebar" class="sidebar">
      <!-- Menu -->
      <div class="menu">
        <ul class="list">
          <li>
            <div class="sidebar-profile clearfix">
              <div class="profile-img">
                <img :src="currentOrganization.employee.image" alt="profile">
              </div>
              <div class="profile-info">
                <h3> {{currentOrganization.employee.first_name}} {{currentOrganization.employee.last_name}}  <i v-if="currentOrganization.employee.is_mykompani_admin" class="material-icons" style="color:green">check_circle</i></h3>
                <p> {{currentOrganization.position}} </p>
              </div>
            </div>
          </li>
          <template v-if="currentOrganization.employee.is_mykompani_admin && currentOrganization.employee.is_employee">
          <li>
            <router-link to="#">
              <i class="menu-icon ti-home"></i>
              <span>Overview</span>
            </router-link>
          </li>
          <li class="active">
            <router-link to="/account/employees/">
              <i class="menu-icon ti-user"></i>
              <span>Employees</span>
            </router-link>
          </li>
          <li>
            <router-link to="/account/payrolls/">
              <i class="menu-icon ti-write"></i>
              <span>Payroll</span>
            </router-link>
          </li>
          </template>
        </ul>
      </div>
    </aside>
  </div>
</template>


<script>
   import {
    mapState
  } from "vuex";

  export default {
     computed: {
      ...mapState({
        currentOrganization: state => state.currentOrganization
      })
    }
  };

</script>