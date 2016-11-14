import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiRequestService {

  constructor(public http: Http) {}

  getRemote(url: string) {
    return this.http.get(url).map(res => res.json());
  }

  get(url: string) {
    return this.getRemote("http://localhost:8080" + url);
  }

}
