import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FiltroHistoricoComponent } from './filtro-historico';

@NgModule({
  declarations: [
    FiltroHistoricoComponent,
  ],
  imports: [
    IonicPageModule.forChild(FiltroHistoricoComponent),
  ],
  exports: [
    FiltroHistoricoComponent
  ]
})
export class FiltroHistoricoComponentModule {}
