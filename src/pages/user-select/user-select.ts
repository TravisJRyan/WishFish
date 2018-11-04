import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { GiversPage } from '../givers/givers'

import { GetStoreOptionsProvider } from '../../providers/get-store-options/get-store-options';
import { ReceiverPage } from '../receiver/receiver';
/**
 * Generated class for the UserSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-select',
  templateUrl: 'user-select.html',
})
export class UserSelectPage {
  lat = 0;
  lon = 0;
  options;

  constructor(public navCtrl: NavController, public navParams: NavParams, public getstoreoptions: GetStoreOptionsProvider, public geolocation: Geolocation) {
    
  }

  giver(){
    this.navCtrl.push(GiversPage);
  }

  receiver(){
    // let response = this.getShopInfo();
    console.log("options", this.options);
    this.navCtrl.push(ReceiverPage,{'response':this.options});
  }

    getShopInfo(){
    //get lat lons here
    this.getstoreoptions.getStoreOptions(this.lat, this.lon, (res)=>{
      this.options = res;
    });
    return this.options;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserSelectPage');
    this.geolocation.getCurrentPosition().then(async(resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude
      console.log(this.lat);
      console.log(this.lon);
      
      this.getstoreoptions.getStoreOptions(this.lat, this.lon, (response)=>{
        let options = response
      });
      //need to call server function here
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

}
