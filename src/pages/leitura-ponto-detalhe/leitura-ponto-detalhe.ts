import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { LeituraSensorHistoricoPage } from '../leitura-sensor-historico/leitura-sensor-historico';

declare var google: any;

@Component({
  selector: 'page-leitura-ponto-detalhe',
  templateUrl: 'leitura-ponto-detalhe.html'
})
export class LeituraPontoDetalhePage {
  private ponto: any;

  constructor(public navCtrl: NavController, public params: NavParams, public platform: Platform) {
    this.ponto = this.params.get('ponto');

    platform.ready().then(() => {
      this.carregaMapa();
    });
  }

  mostraSensorHistorico(sensor: any) {
    this.navCtrl.push(LeituraSensorHistoricoPage, {sensor: sensor});
  }

  private carregaMapa() {
    let latLng    = JSON.parse(this.ponto.localizacao);
    let container = document.getElementById('mapa-ponto-detalhe');
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
