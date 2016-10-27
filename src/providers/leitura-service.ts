import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

export interface Leitura {
  codigo: number,
  nome: string,
  latlng: string,
  sensores: Array<{
    codigo: number,
    nome: string,
    leituras: Array<{
      codigo: number,
      datahora: string,
      leitura: number
    }>
  }>
}

@Injectable()
export class LeituraService {
  private leituraNivelUrl: string = 'http://localhost/EnchenteRest/leitura.php';

  constructor(public http: Http) {}

  readAll(): Observable<Leitura[]> {
    return this.http.get(this.leituraNivelUrl).map(res => <Leitura[]> res.json());
  }

}
