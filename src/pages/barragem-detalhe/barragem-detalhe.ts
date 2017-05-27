import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, NavParams, Platform } from 'ionic-angular';

import { SimpleMapPage } from '../../components/simple-map/simple-map';

import { ApiRequestServiceProvider } from "../../providers/api-request-service/api-request-service";

@IonicPage()
@Component({
  selector: 'page-barragem-detalhe',
  templateUrl: 'barragem-detalhe.html',
})
export class BarragemDetalhePage {
  filtroHistorico: number = 43200;
  barragem: any;
  historicos: any[] = [];

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    public params: NavParams, public apiRequest: ApiRequestServiceProvider, public platform: Platform
  ) {
    this.barragem = this.params.get('barragem');
  }

  ngAfterViewInit() {
    let position = JSON.parse(this.barragem.localizacao);
    let mapa     = new SimpleMapPage('mapa-barragem-detalhe', position);
    mapa.loadMap();
  }

  ionViewDidLoad() {
    this.atualizaHistorico(this.filtroHistorico);
  }

  atualizaHistorico(filtroHistorico) {
    let loading = this.loadCtrl.create({content:'Carregando'});
    loading.present();
    this.apiRequest.get("/api/barragem/" + this.barragem.id + "/historico/filtrodata/" + filtroHistorico).subscribe(historicos => {
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
