import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams, Platform } from 'ionic-angular';
import { SimpleMapPage } from '../simple-map/simple-map';

import { ApiRequestService } from '../../providers/api-request-service';

@Component({
  selector: 'page-barragem-detalhe',
  templateUrl: 'barragem-detalhe.html'
})
export class BarragemDetalhePage {
  filtroHistorico: number = 43200;
  barragem: any;
  historicos: any[] = [];

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    public params: NavParams, public apiRequest: ApiRequestService, public platform: Platform
  ) {
    this.barragem = this.params.get('barragem');

    platform.ready().then(() => {
      let position = JSON.parse(this.barragem.localizacao);
      let mapa     = new SimpleMapPage('mapa-barragem-detalhe', position);
      mapa.loadMap();
    });
  }

  ionViewDidLoad() {
    this.atualizaHistorico();
  }

  atualizaHistorico() {
    let loading = this.loadCtrl.create({content:'Carregando'});
    loading.present();
    this.apiRequest.get("/api/barragem/" + this.barragem.id + "/historico/filtrodata/" + this.filtroHistorico).subscribe(historicos => {
      this.historicos = historicos;
      loading.dismiss();
    }, () => {
      loading.dismiss();
      this.alertCtrl.create({
        title: 'Ops!',
        subTitle: 'Não foi possível buscar o histórico!',
        buttons: ['OK']
      }).present();
    });
  }

}
