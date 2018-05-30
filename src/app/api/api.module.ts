import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {ActivityService} from './activity.service';
import {SystemService} from './system/system.service';
import {EmployeeService} from './employee.service';
import {ApplicationService} from './application.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  declarations: [],
  providers: [ActivityService, ApplicationService, EmployeeService, SystemService]
})
export class ApiModule {

}

