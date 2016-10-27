import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LeituraPontosListaPage } from '../leitura-pontos-lista/leitura-pontos-lista';
import { LeituraGraficoNivelPage } from '../leitura-grafico-nivel/leitura-grafico-nivel';

@Component({
  selector: 'page-nivel',
  templateUrl: 'leitura-menu.html'
})
export class LeituraMenuPage {
  abaPontosLeituraLista:any = LeituraPontosListaPage;
  abaNivelRioGrafico:any = LeituraGraficoNivelPage;

  constructor(public navCtrl: NavController) {}

}
