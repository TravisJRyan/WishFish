import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceiverPage } from './receiver';

@NgModule({
  declarations: [
    ReceiverPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceiverPage),
  ],
  exports: [
    ReceiverPage
  ]
})
export class ReceiverPageModule {}
