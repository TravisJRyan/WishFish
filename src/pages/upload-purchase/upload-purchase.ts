import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UploadPurchasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload-purchase',
  templateUrl: 'upload-purchase.html',
})
export class UploadPurchasePage {
  item : object
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item =  this.navParams.get('item');
    console.log(this.item);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPurchasePage');
  }

}
