import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RequestParticipationComponent} from './request-participation.component';
import {DialogModule} from 'primeng/dialog';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ApplicationService} from '../../api/application.service';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('RequestParticipationComponent', () => {
  let component: RequestParticipationComponent;
  let fixture: ComponentFixture<RequestParticipationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DialogModule, HttpClientModule, BrowserAnimationsModule],
      declarations: [RequestParticipationComponent],
      providers: [ApplicationService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestParticipationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
