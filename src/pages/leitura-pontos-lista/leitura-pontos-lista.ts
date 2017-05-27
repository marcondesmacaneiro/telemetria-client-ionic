import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';

import { LeituraSensorHistoricoPage } from '../leitura-sensor-historico/leitura-sensor-historico';
import { LeituraPontoDetalhePage } from '../leitura-ponto-detalhe/leitura-ponto-detalhe';

import { ApiRequestServiceProvider } from "../../providers/api-request-service/api-request-service";

@IonicPage()
@Component({
  selector: 'page-leitura-pontos-lista',
  templateUrl: 'leitura-pontos-lista.html',
})
export class LeituraPontosListaPage {
  pontos: any[] = [];

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    public apiRequest: ApiRequestServiceProvider
  ) {
  }

  ionViewDidLoad() {
    this.carregaPontos();
  }

  detalhaPontoLeitura(ponto: any){
    this.navCtrl.push(LeituraPontoDetalhePage, {ponto: ponto});
  }

  mostraSensorHistorico(sensor: any){
    this.navCtrl.push(LeituraSensorHistoricoPage, {sensor: sensor});
  }

  carregaPontos() {
    let loading = this.loadCtrl.create({content:'Carregando'});
    loading.present();
    this.apiRequest.get("/leituraponto/search/findAllByOrderByIdAsc/").subscribe(pontos => {
      this.pontos = pontos._embedded.leiturapontos;
      for(let ponto of this.pontos){
        ponto.sensores = [];
        this.apiRequest.get(ponto._links.sensores.href+"ativos").subscribe(sensores => {
          ponto.sensores = sensores;
        });
      }
      loading.dismiss();
    }, () => {
      loading.dismiss();
      this.alertCtrl.create({
        title: 'Ops!',
        subTitle: 'Não foi possível buscar os pontos de leitura!',
        buttons: ['OK']
      }).present();
    });
  }

}
