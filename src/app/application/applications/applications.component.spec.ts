import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ApplicationsComponent} from './applications.component';
import {TableModule} from 'primeng/table';
import {ApplicationService} from '../../api/application.service';
import {HttpClientModule} from '@angular/common/http';

describe('ApplicationsComponent', () => {
  let component: ApplicationsComponent;
  let fixture: ComponentFixture<ApplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TableModule, HttpClientModule],
      declarations: [ApplicationsComponent],
      providers: [ApplicationService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
