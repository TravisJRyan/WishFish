import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReceiverSelectionsPage } from './receiver-selections';

@NgModule({
  declarations: [
    ReceiverSelectionsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReceiverSelectionsPage),
  ],
})
export class ReceiverSelectionsPageModule {}
