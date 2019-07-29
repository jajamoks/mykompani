<template>
  <section class="content">
    <div class="container-fluid">
      <!-- Your content goes here  -->
      <div class="row clearfix">
        <div class="col-lg-4 col-md-12">
          <div class="card">
            <div class="m-b-20">
              <div class="contact-grid">
                <div class="profile-header bg-dark">
                  <div class="user-name">{{employee.first_name}} {{employee.last_name}}</div>
                  <div class="name-center">{{position}}</div>
                </div>
                <img :src="employee.image" class="user-img" alt="">
                <p> {{employee.email}}</p>
                <div>
                  <span class="phone">
                    <i class="material-icons">phone</i>{{employee.phone}}</span>
                </div>
                <p> {{employee.address}} </p>
                <li class="nav-item tab-all">
                  <a class="nav-link active show">Delete Employeer</a>
                </li>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="profile-tab-box">
              <div class="p-l-20">
                <ul class="nav ">
                  <li class="nav-item tab-all">
                    <router-link class="nav-link active show" to="/account/employee/about" data-toggle="tab">About Me</router-link>
                  </li>
                  <li class="nav-item tab-all">
                    <router-link class="nav-link show" to="/account/employee/salaries" data-toggle="tab">Salary Records</router-link>
                  </li>

                </ul>
              </div>
            </div>
          </div>
          <router-view />
        </div>
      </div>
    </div>
  </section>
</template>


<script>
  import {
    mapState
  } from "vuex";
  import axios from 'axios'
  import endpoints from '../apis/endpoints'

  export default {
    data: () => ({ }),
    methods: {},

    computed: {
      ...mapState({
        token: state => state.token,
        employee: state => state.employee.employee,
        position: state => state.employee.position,
      }),

    }

  };

</script>