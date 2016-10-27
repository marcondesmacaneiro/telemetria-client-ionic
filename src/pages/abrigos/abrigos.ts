import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AbrigoDetalhePage } from '../abrigo-detalhe/abrigo-detalhe';

@Component({
  selector: 'page-abrigos',
  templateUrl: 'abrigos.html'
})
export class AbrigosPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {

  }

  detalhaAbrigo(){
    this.navCtrl.push(AbrigoDetalhePage);
  }

}
