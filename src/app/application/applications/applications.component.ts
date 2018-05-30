import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Application} from '../../model/application';
import {ApplicationService} from '../../api/application.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  applications: Application[] = [];

  @Input()
  selectable = false;

  @Output()
  selected: EventEmitter<Application> = new EventEmitter();

  constructor(private applicationService: ApplicationService) {
  }

  ngOnInit() {
    this.applicationService.getAll()
      .subscribe(_ => this.applications = _);
  }

  rowSelected(application) {
    this.selected.emit(application);
  }

}
