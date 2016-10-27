import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-abrigo-detalhe',
  templateUrl: 'abrigo-detalhe.html'
})
export class AbrigoDetalhePage {

  constructor(public navCtrl: NavController, public platform: Platform) {

    platform.ready().then(() => {
      this.carregaMapa();
    });
  }

  ionViewDidLoad() {

  }

  private carregaMapa() {
    let latLng    = new google.maps.LatLng(-27.2072074595, -49.6335553844);
    let container = document.getElementById('mapa-abrigo-detalhe');
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
