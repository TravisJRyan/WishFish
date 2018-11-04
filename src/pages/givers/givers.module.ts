import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiversPage } from './givers';

@NgModule({
  declarations: [
    GiversPage,
  ],
  imports: [
    IonicPageModule.forChild(GiversPage),
  ],
  exports:
  [
    GiversPage
  ]
})
export class GiversPageModule {}
