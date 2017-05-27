import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoacaoDetalhePage } from './doacao-detalhe';

@NgModule({
  declarations: [
    DoacaoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(DoacaoDetalhePage),
  ],
  exports: [
    DoacaoDetalhePage
  ]
})
export class DoacaoDetalhePageModule {}
