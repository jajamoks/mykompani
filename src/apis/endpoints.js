const resource =  {
    // baseUrl: 'http://localhost:3000/api/v1.0/',
    baseUrl: 'https://mykompani-api.herokuapp.com/api/v1.0/',
    
    // user
    login: 'user/login/',
    addEmployee: 'user/employee_sign_up/',
    addEducation: 'user/add_education/',
    employeeEducation: 'user/employee_education/',
    
    // organization
    myOrganizations:'organization/employee_organizations/',
    organizationEmployees: 'organization/organization_employees/',
    employee: 'organization/employee/',

    // payroll
    addPayroll: "payroll/add_payroll/",
    payrolls:'payroll/organization_payroll/',

    // paidSalary
    orgainzationPaidSalaries: "payroll/organization_paid_salaries/",

  }

export default resource
   