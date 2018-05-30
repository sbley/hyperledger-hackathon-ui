import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';
import {Activity} from '../model/activity';

@Injectable()
export class ActivityService {

  readonly url = `${environment.apiUrl}/Activity`;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.url);
  }

  add(a: Activity): Observable<Activity> {
    return this.http.post<Activity>(this.url, a);
  }
}
