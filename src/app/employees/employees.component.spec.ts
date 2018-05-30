import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmployeesComponent} from './employees.component';
import {TableModule} from 'primeng/table';
import {EmployeeService} from '../api/employee.service';
import {HttpClientModule} from '@angular/common/http';

describe('EmployeesComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TableModule, HttpClientModule],
      declarations: [EmployeesComponent],
      providers: [EmployeeService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
