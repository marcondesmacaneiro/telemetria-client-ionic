import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-leitura-sensor-historico',
  templateUrl: 'leitura-sensor-historico.html'
})
export class LeituraSensorHistoricoPage {
  filtroLeitura: string = '3d';

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {

  }

  atualizaHistorico(){
    alert(this.filtroLeitura);
  }

}
