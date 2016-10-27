import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeituraSensorHistoricoPage } from '../leitura-sensor-historico/leitura-sensor-historico';
import { LeituraPontoDetalhePage } from '../leitura-ponto-detalhe/leitura-ponto-detalhe';

@Component({
  selector: 'page-leitura-pontos-lista',
  templateUrl: 'leitura-pontos-lista.html'
})
export class LeituraPontosListaPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {

  }

  detalhaPontoLeitura(nomePonto: string){
    this.navCtrl.push(LeituraPontoDetalhePage, {titulo: nomePonto});
  }

  mostraSensorHistorico(pontoId: number, sensorId: number){
    this.navCtrl.push(LeituraSensorHistoricoPage);
  }

}
