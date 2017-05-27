import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController } from 'ionic-angular';

import { DoacaoDetalhePage } from "../doacao-detalhe/doacao-detalhe";

import { ApiRequestServiceProvider } from "../../providers/api-request-service/api-request-service";

@IonicPage()
@Component({
  selector: 'page-doacoes',
  templateUrl: 'doacoes.html',
})
export class DoacoesPage {
  doacoes: any[] = [];

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    public apiRequest: ApiRequestServiceProvider
  ) {
  }

  ionViewDidLoad() {
    this.carregaDoacoes();
  }

  detalhaDoacao(doacao: any){
    this.navCtrl.push(DoacaoDetalhePage, {doacao: doacao});
  }

  carregaDoacoes() {
    let loading = this.loadCtrl.create({content:'Carregando'});
    loading.present();
    this.apiRequest.get("/doacao/search/findAllByOrderByIdAsc/").subscribe(doacoes => {
      this.doacoes = doacoes._embedded.doacoes;
      loading.dismiss();
    }, () => {
      loading.dismiss();
      this.alertCtrl.create({
        title: 'Ops!',
        subTitle: 'Não foi possível buscar os dados de doações!',
        buttons: ['OK']
      }).present();
    });
  }

}
