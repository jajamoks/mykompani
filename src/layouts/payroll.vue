<template>
  <section class="content">
    <div class="container-fluid">
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style ">
              <router-link to="/account/payrolls/">
                <button type="button" class="btn btn-primary waves-effect m-r-15">All Payroll</button>
              </router-link>
              <router-link to="/account/payrolls/paid-salaries">
                <button type="button" class="btn btn-primary waves-effect m-r-15">Paid Salaries</button>
              </router-link>
                <button type="button" class="btn btn-primary waves-effect m-r-15" data-toggle="modal" data-target="#payrollModal">Add Payroll</button>
            </ul>
            <!-- modal -->
          <add-payroll></add-payroll>

          </div>
        </div>
      </div>
      <router-view />
    </div>
  </section>
</template>

<script>

    import AddPayroll from '../modals/add_payroll'

  export default {
    components: {
      AddPayroll
    },
}
</script>
