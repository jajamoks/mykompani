<template>
  <section class="content">
    <div class="container-fluid">
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style ">
              <router-link to="/account/employees/">
                <button type="button" class="btn btn-primary waves-effect m-r-15">All Employee</button>
              </router-link>
              <router-link to="/account/employees/add">
                <button type="button" class="btn btn-primary waves-effect m-r-15">Add Employee</button>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
      <router-view />
    </div>
  </section>
</template>
