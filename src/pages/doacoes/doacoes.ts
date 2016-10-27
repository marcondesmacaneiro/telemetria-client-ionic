import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DoacaoDetalhePage } from '../doacao-detalhe/doacao-detalhe';

@Component({
  selector: 'page-doacoes',
  templateUrl: 'doacoes.html'
})
export class DoacoesPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {

  }

  detalhaDoacao(){
    this.navCtrl.push(DoacaoDetalhePage);
  }

}
