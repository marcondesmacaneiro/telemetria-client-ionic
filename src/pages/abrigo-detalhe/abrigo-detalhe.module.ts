import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbrigoDetalhePage } from './abrigo-detalhe';

@NgModule({
  declarations: [
    AbrigoDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(AbrigoDetalhePage),
  ],
  exports: [
    AbrigoDetalhePage
  ]
})
export class AbrigoDetalhePageModule {}
