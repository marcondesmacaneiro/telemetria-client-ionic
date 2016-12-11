import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiRequestService {

  constructor(public http: Http) {}

  get(url: string) {
    let urlApi = "https://telemetria-rest.herokuapp.com";
    url = urlApi + url.replace(urlApi, '');
    return this.http.get(url).map(res => res.json());
  }

}
