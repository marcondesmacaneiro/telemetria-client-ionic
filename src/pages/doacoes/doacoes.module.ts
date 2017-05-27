import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoacoesPage } from './doacoes';

@NgModule({
  declarations: [
    DoacoesPage,
  ],
  imports: [
    IonicPageModule.forChild(DoacoesPage),
  ],
  exports: [
    DoacoesPage
  ]
})
export class DoacoesPageModule {}
