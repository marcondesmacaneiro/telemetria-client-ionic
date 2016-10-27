import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { AbrigosPage } from '../pages/abrigos/abrigos';
import { ContatosPage } from '../pages/contatos/contatos';
import { DoacoesPage } from '../pages/doacoes/doacoes';
import { LeituraMenuPage } from '../pages/leitura-menu/leitura-menu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = HomePage;
  pages: Array<{title: String, page: any}>;

  constructor(public platform: Platform, public menu: MenuController) {
    this.initializeApp();
    this.pages = [
      { title: 'Início', page: HomePage },
      { title: 'Leitura', page: LeituraMenuPage },
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
