import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-leitura-ponto-detalhe',
  templateUrl: 'leitura-ponto-detalhe.html'
})
export class LeituraPontoDetalhePage {
  titulo: string;

  constructor(public navCtrl: NavController, public params: NavParams, public platform: Platform) {
    this.titulo = this.params.get('titulo');

    platform.ready().then(() => {
      this.carregaMapa();
    });
  }

  ionViewDidLoad() {

  }

  mostraSensorHistorico(sensorId: number) {

  }

  private carregaMapa() {
    let latLng    = new google.maps.LatLng(-27.2072074595, -49.6335553844);
    let container = document.getElementById('mapa-ponto-detalhe');
    let map = new google.maps.Map(container, {
      center           : latLng,
      zoom             : 18,
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
