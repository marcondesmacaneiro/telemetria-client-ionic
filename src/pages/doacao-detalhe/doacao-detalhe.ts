import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-doacao-detalhe',
  templateUrl: 'doacao-detalhe.html'
})
export class DoacaoDetalhePage {
  private doacao: any;

  constructor(public navCtrl: NavController, public params: NavParams, public platform: Platform) {
    this.doacao = this.params.get('doacao');

    platform.ready().then(() => {
      this.carregaMapa();
    });
  }

  private carregaMapa() {
    let latLng    = JSON.parse(this.doacao.localizacao);
    let container = document.getElementById('mapa-doacao-detalhe');
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

}
