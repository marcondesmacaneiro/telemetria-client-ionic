import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { AbrigosPage } from '../pages/abrigos/abrigos';
import { ContatosPage } from '../pages/contatos/contatos';
import { DoacoesPage } from '../pages/doacoes/doacoes';
import { LeituraPontosListaPage } from '../pages/leitura-pontos-lista/leitura-pontos-lista';
import { BarragensPage } from '../pages/barragens/barragens';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = LeituraPontosListaPage;
  pages: Array<{title: String, page: any}>;

  constructor(public platform: Platform, public menu: MenuController) {
    this.initializeApp();
    this.pages = [
      { title: 'Leitura', page: LeituraPontosListaPage },
      { title: 'Barragens', page: BarragensPage },
      { title: 'Abrigos', page: AbrigosPage },
      { title: 'Doações', page: DoacoesPage },
      { title: 'Contatos', page: ContatosPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  changePage(page){
    this.menu.close();
    this.nav.setRoot(page.page);
  }
}
