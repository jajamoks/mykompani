import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

// LAYOUTS
import MainLayout from '@/layouts/main'
import EmployeesLayout from '@/layouts/employees'
import ProfileLayout from '@/layouts/profile'
import PayrollLayout from '@/layouts/payroll'

// PAGES
import LoginPage from '@/pages/login'
import EmployeesPage from '@/pages/employee/employees'
import AddEmployeePage from '@/pages/employee/add_employee'
import ProfileAboutPage from '@/pages/profile/about'
import ProfileSalaryPage from '@/pages/profile/salary_records'
import PayrollsPage from '@/pages/payroll/payrolls'
import PaidSalaries from '@/pages/payroll/paid_salaries'

// ROUTES
export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'LoginPage', component: LoginPage  },
    { path: '/account/', name: 'MainLayout', component: MainLayout,
      children:[
        { path: 'employees/', name: 'EmployeesLayout', component: EmployeesLayout,
          children:[
            { path: '', name: '', component: EmployeesPage },
            { path: 'add', component: AddEmployeePage }
          ]
        },
        { path: 'employee/', name: 'ProfileLayout', component: ProfileLayout,
          children:[
            { path: 'about', name: 'ProfileAboutPage', component: ProfileAboutPage },
            { path: 'salaries', name: 'ProfileSalaryPage', component: ProfileSalaryPage },
          ]
        },
        { path: 'payrolls/', name: 'PayrollLayout', component: PayrollLayout,
          children:[
            { path: '', name: 'PayrollsPage', component: PayrollsPage },
            { path: 'paid-salaries', name: 'PaidSalaries', component: PaidSalaries },
          ]
        }
      ]
    }
  ]
})
