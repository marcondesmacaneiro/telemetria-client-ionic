import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AbrigoDetalhePage } from '../abrigo-detalhe/abrigo-detalhe';

import { ApiRequestService } from '../../providers/api-request-service';

@Component({
  selector: 'page-abrigos',
  templateUrl: 'abrigos.html'
})
export class AbrigosPage {
  private abrigos: any[] = [];

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    private apiRequest: ApiRequestService
  ) {}

  ionViewDidLoad() {
    this.carregaAbrigos();
  }

  detalhaAbrigo(abrigo: any){
    this.navCtrl.push(AbrigoDetalhePage, {abrigo: abrigo});
  }

  carregaAbrigos() {
    let loading = this.loadCtrl.create({content:'Carregando'});
    loading.present();
    this.apiRequest.get("/api/abrigo/").subscribe(abrigos => {
      this.abrigos = abrigos;
      loading.dismiss();
    }, () => {
      loading.dismiss();
      this.alertCtrl.create({
        title: 'Ops!',
        subTitle: 'Não foi possível buscar os abrigos!',
        buttons: ['OK']
      }).present();
    });
  }
}
