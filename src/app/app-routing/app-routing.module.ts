import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from '../employees/employees.component';
import { HomeComponent } from '../home/home.component';
import { CreateEmployeeComponent } from '../employees/create-employee/create-employee.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'employees',
    component: EmployeesComponent,
  },
  {
    path: 'employees/create',
    component: CreateEmployeeComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
