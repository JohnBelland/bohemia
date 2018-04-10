import { Injectable } from '@angular/core';
import { Employee } from '../app-models/employee.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EmployeesService {
  constructor() {
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
      newEmployees.push(new Employee('John Belland', 'Senior Software Developer', 'https://www.thehappycatsite.com/wp-content/uploads/2017/10/best-treats-for-kittens.jpg'));
      newEmployees.push(new Employee('James Bond', 'Software Developer', 'http://www.clker.com/cliparts/1/a/f/5/12755174622088242613cat-md.png'));
      this.setLocalStorageEmployees(newEmployees);
    }

    return JSON.parse(localStorage.getItem('employees')).employees;
  }
}
