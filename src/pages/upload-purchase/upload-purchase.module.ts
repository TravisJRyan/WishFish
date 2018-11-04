import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploadPurchasePage } from './upload-purchase';

@NgModule({
  declarations: [
    UploadPurchasePage,
  ],
  imports: [
    IonicPageModule.forChild(UploadPurchasePage),
  ],
  exports:[
    UploadPurchasePage
  ]
})
export class UploadPurchasePageModule {}
