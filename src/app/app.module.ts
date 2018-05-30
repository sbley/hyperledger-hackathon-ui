import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TableModule} from 'primeng/table';
import {ApiModule} from './api/api.module';
import {ActivitiesComponent} from './activities/activities.component';
import {EmployeesComponent} from './employees/employees.component';
import {HistoryComponent} from './history/history.component';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {RequestParticipationComponent} from './application/request-participation/request-participation.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ApplicationsComponent} from './application/applications/applications.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    EmployeesComponent,
    HistoryComponent,
    RequestParticipationComponent,
    ApplicationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
    ButtonModule,
    ApiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
