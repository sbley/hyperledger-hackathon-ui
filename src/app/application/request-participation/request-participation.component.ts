import {Component, EventEmitter, Output} from '@angular/core';
import {ApplicationService} from '../../api/application.service';
import {Application, ApplicationState} from '../../model/application';
import {map} from 'rxjs/operators';
import {Employee} from '../../model/employee';
import {Activity} from '../../model/activity';

@Component({
  selector: 'app-request-participation',
  templateUrl: './request-participation.component.html',
  styleUrls: ['./request-participation.component.scss']
})
export class RequestParticipationComponent {

  dialogVisible = false;

  private employee: Employee;
  private activity: Activity;

  @Output()
  submitted: EventEmitter<Application> = new EventEmitter();

  constructor(private applicationService: ApplicationService) {
  }

  send() {
    this.applicationService.getAll().pipe(
      map(apps => apps.map(_ => Number(_.appID))),
      map(appIDs => Math.max(...appIDs))
    ).subscribe(maxID => {
      const application = {
        participant: `org.saxonia.employee.Employee#${this.employee.email}`,
        activity: `org.saxonia.employee.Activity#${this.activity.actID}`,

        appID: `${maxID + 1}`,
        state: ApplicationState.PENDING
      };
      this.applicationService.add(application).subscribe(
        newApplication => {
          this.dialogVisible = false;
          this.submitted.emit(newApplication);
        },
        error => {
          console.error(error);
        });
    });
  }

  isValid() {
    return this.employee && this.activity;
  }

  employeeSelected(event) {
    this.employee = event;
  }

  activitySelected(event) {
    this.activity = event;
  }
}
