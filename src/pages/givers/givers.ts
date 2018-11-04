import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import {UploadPurchasePage} from '../upload-purchase/upload-purchase';



@IonicPage()
@Component({
  selector: 'page-givers',
  templateUrl: 'givers.html',
})
export class GiversPage {

  cardItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.cardItems = [
      {
        description: 'Need food, very hungry',
        title: 'Subway',
        address: 'Philidelphia PA'
      },
      {
        description: 'Looking for a sandwich',
        title: 'Jimmy John\'s',
        address: 'New York, New York'
      },
      {
        description: 'Hoping someone can help me get a bite to eat. God bless.',
        title: 'Cici\'s Pizza',
        address: 'Bowling Green, KY'
      },
      {
        description: 'Just need to get some groceries this week.',
        title: 'Publix',
        address: 'Orlando, FL'
      }
    ];

    console.log("Page loaded!!!");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GiversPage');
  }

  optionSelected(item){
    let uploadview = this.modalCtrl.create(UploadPurchasePage, {item: item});
   uploadview.present()

  }

}
