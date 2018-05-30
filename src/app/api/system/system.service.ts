import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import {HistorianRecord} from './history';

@Injectable()
export class SystemService {

  readonly url = `${environment.apiUrl}/system/historian`;

  constructor(private http: HttpClient) {
  }

  getHistory(): Observable<HistorianRecord[]> {
    return this.http.get<HistorianRecord[]>(this.url);
  }
}
