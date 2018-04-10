import { Injectable } from '@angular/core';
import { Employee } from '../app-models/employee.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EmployeesService {
  constructor() {
    // const localStorageEmployees = this.getLocalStorageEmployees();
    //
    // if (!localStorageEmployees) {
    //   this.createEmployee(new Employee('John Belland', 'Senior Software Developer', 'http://oviedoboom.com'));
    //   this.createEmployee(new Employee('James Bond', 'Software Developer', 'http://someothersite.com'));
    // }
  }

  createEmployee(employee: Employee): void {
    let localStorageEmployees = this.getLocalStorageEmployees();
    localStorageEmployees.push(employee);
    this.setLocalStorageEmployees(localStorageEmployees);
  }

  getEmployees(): Observable<Employee[]> {
    return Observable.of(this.getLocalStorageEmployees());
  }

  private setLocalStorageEmployees(employees: Employee[]): void {
    localStorage.setItem('employees', JSON.stringify( { employees: employees }));
  }

  private getLocalStorageEmployees(): Employee[] {
    const localStorageEmployeesItem = localStorage.getItem('employees');

    if (localStorageEmployeesItem === null) {
      const newEmployees = [];
      newEmployees.push(new Employee('John Belland', 'Senior Software Developer', 'http://oviedoboom.com'));
      newEmployees.push(new Employee('James Bond', 'Software Developer', 'http://someothersite.com'));
      this.setLocalStorageEmployees(newEmployees);
    }

    return JSON.parse(localStorage.getItem('employees')).employees;
  }
}
