import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeituraPontosListaPage } from './leitura-pontos-lista';

@NgModule({
  declarations: [
    LeituraPontosListaPage,
  ],
  imports: [
    IonicPageModule.forChild(LeituraPontosListaPage),
  ],
  exports: [
    LeituraPontosListaPage
  ]
})
export class LeituraPontosListaPageModule {}
