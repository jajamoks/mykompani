<template>
  <body class="light">
    <main-header></main-header>
    <side-menu></side-menu>
    <router-view />
  </body>
</template>

<script>
  import SideMenu from '@/components/side_menu'
  import MainHeader from '@/components/main_header'

  export default {
    components: {
      SideMenu,
      MainHeader
    },
  }

</script>
