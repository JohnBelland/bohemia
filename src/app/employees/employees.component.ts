import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Employee } from '../app-models/employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[];
  showHideToggle = true;
  constructor(private employeeService: EmployeesService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(e => this.employees = e);
  }
}
