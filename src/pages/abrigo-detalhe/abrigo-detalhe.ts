import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams, Platform } from 'ionic-angular';
import { SimpleMapPage } from '../simple-map/simple-map';

import { ApiRequestService } from '../../providers/api-request-service';

@Component({
  selector: 'page-abrigo-detalhe',
  templateUrl: 'abrigo-detalhe.html'
})
export class AbrigoDetalhePage {
  abrigo: any;
  contatos: any[] = [];

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    public params: NavParams, public platform: Platform, public apiRequest: ApiRequestService
  ) {
    this.abrigo = this.params.get('abrigo');

    platform.ready().then(() => {
      let position = JSON.parse(this.abrigo.localizacao);
      let mapa     = new SimpleMapPage('mapa-abrigo-detalhe', position);
      mapa.loadMap();
    });
  }

  ionViewDidLoad() {
    this.carregaContatos();
  }

  carregaContatos() {
    let loading = this.loadCtrl.create({content:'Carregando'});
    loading.present();
    this.apiRequest.get("/api/abrigo/" + this.abrigo.id + "/contato").subscribe(contatos => {
      this.contatos = contatos;
      loading.dismiss();
    }, () => {
      loading.dismiss();
      this.alertCtrl.create({
        title: 'Ops!',
        subTitle: 'Não foi possível buscar os contatos!',
        buttons: ['OK']
      }).present();
    });
  }
}
