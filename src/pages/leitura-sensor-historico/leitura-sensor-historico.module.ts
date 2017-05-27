import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LeituraSensorHistoricoPage } from './leitura-sensor-historico';

@NgModule({
  declarations: [
    LeituraSensorHistoricoPage,
  ],
  imports: [
    IonicPageModule.forChild(LeituraSensorHistoricoPage),
  ],
  exports: [
    LeituraSensorHistoricoPage
  ]
})
export class LeituraSensorHistoricoPageModule {}
