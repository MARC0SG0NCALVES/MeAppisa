import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Api } from './api';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class User {

  constructor(public http: Http, public api: Api) { }

  public login(account: { email: string, password: string }): Observable<Response> {
    const callback = this.api.post('Developers/login', account).share();
    callback.map(res => res.json())
      .subscribe(
      res => this.loggedIn(res),
      err => console.error('ERROR', err));
    return callback;
  }

  public signup(account: { email: string, password: string }): Observable<Response> {
    const callback = this.api.post('Developers', account).share();
    callback.map(res => res.json())
      .subscribe(
      res => this.loggedIn(res),
      err => console.error('ERROR', err));
    return callback;
  }

  public id() {
    return localStorage.getItem('_id');
  };
  public token() {
    return localStorage.getItem('_access_token');
  };

  public logout() {
    localStorage.clear();
  }

  public loggedIn(resp) {
    localStorage.setItem('_id', resp.userId);
    localStorage.setItem('_access_token', resp.id);
  }
}
