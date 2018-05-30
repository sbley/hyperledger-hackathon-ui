import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ActivitiesComponent} from './activities.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {TableModule} from 'primeng/table';
import {ActivityService} from '../api/activity.service';
import {HttpClientModule} from '@angular/common/http';

describe('ActivitiesComponent', () => {
  let component: ActivitiesComponent;
  let fixture: ComponentFixture<ActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TableModule, HttpClientModule],
      declarations: [ActivitiesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [ActivityService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
