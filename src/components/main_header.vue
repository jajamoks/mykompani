<template>
<nav class="navbar">
    <div class="container-fluid">
        <div class="navbar-header">
            <a href="all-employees.html#" onClick="return false;" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#navbar-collapse" aria-expanded="false"></a>
            <a href="all-employees.html#" onClick="return false;" class="bars"></a>
            <a class="navbar-brand">
                <img style="height: 31px;" :src="currentOrganization.organization.image" alt="" />
                <span class="logo-name">{{currentOrganization.organization.name}}</span>
            </a>
        </div>
        <div class="collapse navbar-collapse" id="navbar-collapse">
            <ul class="nav navbar-nav navbar-left">
                <li>
                    <a href="all-employees.html#" onClick="return false;" class="sidemenu-collapse">
                        <i class="nav-hdr-btn ti-align-left"></i>
                    </a>
                </li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
                <li class="fullscreen">
                    <a href="javascript:;" class="fullscreen-btn">
                        <i class="nav-hdr-btn ti-fullscreen"></i>
                    </a>
                </li>
                <li class="dropdown">
                    <a href="all-employees.html#" onClick="return false;" class="dropdown-toggle" data-toggle="dropdown"
                        role="button">
                        <i class="nav-hdr-btn ti-bell"></i>
                        <span class="notify"></span>
                        <span class="heartbeat"></span>
                    </a>
                    <ul class="dropdown-menu pullDown">
                        <li class="header">NOTIFICATIONS</li>
                        <li class="body">
                            <ul class="menu">
                                <li>
                                    <a href="all-employees.html#" onClick="return false;">
                                        <span class="table-img msg-user">
                                            <img :src="currentOrganization.employee.image" alt="">
                                        </span>
                                        <span class="menu-info">
                                            <span class="menu-title">Sarah Smith</span>
                                            <span class="menu-desc">
                                                <i class="material-icons">access_time</i> 14 mins ago
                                            </span>
                                            <span class="menu-desc">Please check your email.</span>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="all-employees.html#" onClick="return false;">
                                        <span class="table-img msg-user">
                                            <img src="../../static/assets/images/user/user2.jpg" alt="">
                                        </span>
                                        <span class="menu-info">
                                            <span class="menu-title">Airi Satou</span>
                                            <span class="menu-desc">
                                                <i class="material-icons">access_time</i> 22 mins ago
                                            </span>
                                            <span class="menu-desc">Please check your email.</span>
                                        </span>
                                    </a>
                                </li>
                              </ul>
                        </li>
                        <li class="footer">
                            <a href="all-employees.html#" onClick="return false;">View All Notifications</a>
                        </li>
                    </ul>
                </li>
                <!-- #END# Notifications-->
                <li class="dropdown user_profile">
                    <div class="dropdown-toggle" data-toggle="dropdown">
                        <img style="height: 53px;" :src="currentOrganization.employee.image" alt="user">
                    </div>
                    <ul class="dropdown-menu pullDown">
                        <li class="body">
                            <ul class="user_dw_menu">
                                <li>
                                    <a href="all-employees.html#" onClick="return false;">
                                        <i class="material-icons">person</i>Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="all-employees.html#" onClick="return false;">
                                        <i class="material-icons">feedback</i>Feedback
                                    </a>
                                </li>
                                <li>
                                    <a href="all-employees.html#" onClick="return false;">
                                        <i class="material-icons">help</i>Help
                                    </a>
                                </li>
                                <li>
                                    <a  @click="userLogout">
                                        <i class="material-icons">power_settings_new</i>Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <!-- #END# Tasks -->
                <li class="pull-right">
                    <a href="all-employees.html#" onClick="return false;" class="js-right-sidebar" data-close="true">
                        <i class="nav-hdr-btn ti-layout-grid2"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script>
   import {
    mapState
  } from "vuex";

  export default {
    data: () => ({
      user: {
        email: '',
        password: ''
      }
    }),
    methods: {
      async userLogout() {
        this.$loading('loading...')
          if (this.logedIn == true) {
            this.$store.commit("setLogout", {})
            this.$loading.close()
            this.$router.push({ path: '/' })
          }else{
            this.$toast('You not logged in yet')
            this.$loading.close()
          }


      }
    },
     computed: {
      ...mapState({
        logedIn: state => state.logedIn,
        currentOrganization: state => state.currentOrganization
      })
    }
  };

</script>