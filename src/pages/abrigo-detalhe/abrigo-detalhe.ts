import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController, NavParams, Platform } from 'ionic-angular';

import { ApiRequestService } from '../../providers/api-request-service';

declare var google: any;

@Component({
  selector: 'page-abrigo-detalhe',
  templateUrl: 'abrigo-detalhe.html'
})
export class AbrigoDetalhePage {
  private abrigo: any;
  private contatos: any[] = [];

  constructor(
    public navCtrl: NavController, public loadCtrl: LoadingController, public alertCtrl: AlertController,
    public params: NavParams, public platform: Platform, private apiRequest: ApiRequestService
  ) {
    this.abrigo = this.params.get('abrigo');

    platform.ready().then(() => {
      this.carregaMapa();
    });
  }

  ionViewDidLoad() {
    this.carregaContatos();
  }

  private carregaMapa() {
    let latLng    = JSON.parse(this.abrigo.localizacao);
    let container = document.getElementById('mapa-abrigo-detalhe');
    let map = new google.maps.Map(container, {
      center           : latLng,
      zoom             : 17,
      zoomControl      : true,
      disableDefaultUI : true,
      mapTypeId        : google.maps.MapTypeId.ROADMAP
    });

    let marker = new google.maps.Marker({
      position: latLng
    });

    marker.setMap(map);
  }

  private carregaContatos() {
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
