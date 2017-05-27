import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarragemDetalhePage } from './barragem-detalhe';

@NgModule({
  declarations: [
    BarragemDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(BarragemDetalhePage),
  ],
  exports: [
    BarragemDetalhePage
  ]
})
export class BarragemDetalhePageModule {}
