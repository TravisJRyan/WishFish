import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReceiverSelectionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receiver-selections',
  templateUrl: 'receiver-selections.html',
})
export class ReceiverSelectionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiverSelectionsPage');
  }

  giveThis(option){
    //need username
    //need to present them with a way to makw the purchase then return it back to the recipient

  }

  



}
