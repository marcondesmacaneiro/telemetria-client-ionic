import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { SimpleMapPage } from '../../components/simple-map/simple-map';

@IonicPage()
@Component({
  selector: 'page-doacao-detalhe',
  templateUrl: 'doacao-detalhe.html',
})
export class DoacaoDetalhePage {
  doacao: any;

  constructor(public navCtrl: NavController, public params: NavParams, public platform: Platform) {
    this.doacao = this.params.get('doacao');
  }

  ngAfterViewInit() {
    let position = JSON.parse(this.doacao.localizacao);
    let mapa     = new SimpleMapPage('mapa-doacao-detalhe', position);
    mapa.loadMap();
  }

}
