import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { LeituraSensorHistoricoPage } from "../leitura-sensor-historico/leitura-sensor-historico";

import { SimpleMapPage } from '../../components/simple-map/simple-map';

@IonicPage()
@Component({
  selector: 'page-leitura-ponto-detalhe',
  templateUrl: 'leitura-ponto-detalhe.html',
})
export class LeituraPontoDetalhePage {
  ponto: any;

  constructor(public navCtrl: NavController, public params: NavParams, public platform: Platform) {
    this.ponto = this.params.get('ponto');
  }

  ngAfterViewInit() {
    let position = JSON.parse(this.ponto.localizacao);
    let mapa     = new SimpleMapPage('mapa-ponto-detalhe', position);
    mapa.loadMap();
  }

  mostraSensorHistorico(sensor: any) {
    this.navCtrl.push(LeituraSensorHistoricoPage, {sensor: sensor});
  }

}
