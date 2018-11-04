import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserSelectPage } from './user-select';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    UserSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(UserSelectPage),
  ],
  exports: [
    UserSelectPage
  ]
})
export class UserSelectPageModule {}
