import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Application} from '../model/application';

@Injectable()
export class ApplicationService {

  readonly url = `${environment.apiUrl}/Application`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Application[]> {
    return this.http.get<Application[]>(this.url);
  }

  add(p: Application): Observable<Application> {
    return this.http.post<Application>(this.url, p);
  }
}
