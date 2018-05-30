import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivityService} from '../api/activity.service';
import {Activity} from '../model/activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities: Activity[] = [];

  @Input()
  selectable = false;

  @Output()
  selected: EventEmitter<Activity> = new EventEmitter();

  constructor(private activityService: ActivityService) {
  }

  ngOnInit() {
    this.activityService.getAll()
      .subscribe(_ => this.activities = _);
  }

  rowSelected(activity) {
    this.selected.emit(activity);
  }
}
