import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeituraPontoDetalhePage } from './leitura-ponto-detalhe';

@NgModule({
  declarations: [
    LeituraPontoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(LeituraPontoDetalhePage),
  ],
  exports: [
    LeituraPontoDetalhePage
  ]
})
export class LeituraPontoDetalhePageModule {}
