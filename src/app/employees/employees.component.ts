import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EmployeeService} from '../api/employee.service';
import {Employee} from '../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees: Employee[] = [];

  @Input()
  selectable = false;

  @Output()
  selected: EventEmitter<Employee> = new EventEmitter();

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit() {
    this.employeeService.getAll()
      .subscribe(_ => this.employees = _);
  }

  rowSelected(employee) {
    this.selected.emit(employee);
  }
}
