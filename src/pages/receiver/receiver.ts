import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { WelcomePage } from '../welcome/welcome';
import { NewsFeed } from '../newsfeed/newsfeed';

/**
 * Generated class for the ReceiverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receiver',
  templateUrl: 'receiver.html',
})

export class ReceiverPage {

  cardItems: any[];
  private todo: FormGroup;
  langs;
  langForm;

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });

    this.todo=formBuilder.group({
      name : ['']
    });
    this.cardItems = [
      {
        name: 'Subway',
        address: '123 Park Street, Philidelphia PA'
      },
      {
        name: 'Cici\'s Pizza',
        address: '89 West 9th Street, Philidelphia PA'
      },
      {
        name: 'Wal-Mart',
        address: '920 Broadway Avenue, Philidelphia PA'
      },
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReceiverPage');
  }

  doSubmit(event) {
    console.log("Testing");
    console.log('Submitting form', this.langForm.value);
    let toast = this.toastCtrl.create({
      message: "Your need has been submitted. Check back soon for responses.",
      duration: 3000,
      position: 'top'
    });
    toast.present();
    event.preventDefault();
    setTimeout(function(){
      this.navCtrl.push(ReceiverPage);
    }, 3000);
  }

}
