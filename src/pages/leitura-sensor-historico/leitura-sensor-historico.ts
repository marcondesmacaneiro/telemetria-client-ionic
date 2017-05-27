import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { ApiRequestServiceProvider } from "../../providers/api-request-service/api-request-service";

@IonicPage()
@Component({
  selector: 'page-leitura-sensor-historico',
  templateUrl: 'leitura-sensor-historico.html',
})
export class LeituraSensorHistoricoPage {
  filtroLeitura: number = 259200;
  sensor: any;
  leituras: any[] = [];

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    public params: NavParams, public apiRequest: ApiRequestServiceProvider
  ) {
    this.sensor = this.params.get('sensor');
  }

  ionViewDidLoad() {
    this.atualizaHistorico(this.filtroLeitura);
  }

  atualizaHistorico(filtroLeitura: number){
    let loading = this.loadCtrl.create({content:'Carregando'});
    loading.present();
    this.apiRequest.get("/leiturasensor/" + this.sensor.id + "/filtrodata/" + filtroLeitura).subscribe(leituras => {
      this.leituras = leituras;
      loading.dismiss();
    }, () => {
      loading.dismiss();
      this.alertCtrl.create({
        title: 'Ops!',
        subTitle: 'Não foi possível buscar o histórico de leitura!',
        buttons: ['OK']
      }).present();
    });
  }

}
