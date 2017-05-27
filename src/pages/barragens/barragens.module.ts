import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BarragensPage } from './barragens';

@NgModule({
  declarations: [
    BarragensPage,
  ],
  imports: [
    IonicPageModule.forChild(BarragensPage),
  ],
  exports: [
    BarragensPage
  ]
})
export class BarragensPageModule {}
