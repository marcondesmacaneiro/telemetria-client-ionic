import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';

import { ApiRequestService } from '../../providers/api-request-service';

@Component({
  selector: 'page-leitura-sensor-historico',
  templateUrl: 'leitura-sensor-historico.html'
})
export class LeituraSensorHistoricoPage {
  filtroLeitura: number = 259200;
  sensor: any;
  leituras: any[] = [];

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    public params: NavParams, public apiRequest: ApiRequestService
  ) {
    this.sensor = this.params.get('sensor');
  }

  ionViewDidLoad() {
    this.atualizaHistorico();
  }

  atualizaHistorico(){
    let loading = this.loadCtrl.create({content:'Carregando'});
    loading.present();
    this.apiRequest.get("/leiturasensor/" + this.sensor.id + "/filtrodata/" + this.filtroLeitura).subscribe(leituras => {
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
