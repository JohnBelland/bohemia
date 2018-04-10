import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../../app-models/employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  @Input() employee: Employee;
  constructor() { }

  ngOnInit() {
  }

}
