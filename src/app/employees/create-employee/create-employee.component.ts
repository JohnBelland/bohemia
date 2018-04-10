import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private employeeService: EmployeesService, private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.formBuilder.group({
      name: ['', Validators.required ],
      title: ['', Validators.required ],
      imageUrl: ['', Validators.required ],
    });
  }

  onSubmit() {
    this.employeeService.createEmployee(this.employeeForm.value);
    this.router.navigate(['/employees']);
  }

  isFieldValid(field: string) {
    return !this.employeeForm.get(field).valid && this.employeeForm.get(field).touched;
  }
}
