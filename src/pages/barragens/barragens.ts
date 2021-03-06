import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';

import { BarragemDetalhePage } from "../barragem-detalhe/barragem-detalhe";

import { ApiRequestServiceProvider } from "../../providers/api-request-service/api-request-service";

@IonicPage()
@Component({
  selector: 'page-barragens',
  templateUrl: 'barragens.html',
})
export class BarragensPage {
  barragens: any[] = [];

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    public apiRequest: ApiRequestServiceProvider
  ) {
  }

  ionViewDidLoad() {
    this.carregaBarragens();
  }

  detalhaBarragem(barragem: any){
    this.navCtrl.push(BarragemDetalhePage, {barragem: barragem});
  }

  carregaBarragens() {
    let loading = this.loadCtrl.create({content:'Carregando'});
    loading.present();
    this.apiRequest.get("/api/barragem/").subscribe(barragens => {
      this.barragens = barragens;
      loading.dismiss();
    }, () => {
      loading.dismiss();
      this.alertCtrl.create({
        title: 'Ops!',
        subTitle: 'Não foi possível buscar os dados das barragens!',
        buttons: ['OK']
      }).present();
    });
  }

}
