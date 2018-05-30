import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/Observable';
import {Employee} from '../model/employee';

@Injectable()
export class EmployeeService {

  readonly url = `${environment.apiUrl}/Employee`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  add(e: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, e);
  }
}
