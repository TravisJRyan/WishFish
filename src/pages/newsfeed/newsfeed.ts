import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, ToastController} from 'ionic-angular';
import {Items} from "../../providers";

@IonicPage()
@Component({
  selector: 'news-feed',
  templateUrl: 'newsfeed.html'
})
export class NewsFeed {
  cardItems: any[];
  public press: number = 0;
  public likes: number = 10;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public items: Items, public toastCtrl: ToastController) {
    this.cardItems = [
      {
        user_avtar: 'assets/img/health.png',
        user_name: 'Health',
        image: 'assets/img/healthydinners.jpeg',
        content: 'Healthy food doesn\'t have to be expensive! Learn how you can make great meals for great prices.',
        link: 'https://www.foodnetwork.com/healthy/photos/10-healthy-dinners-for-about-10'
      },
      {
        user_avtar: 'assets/img/arrow.png',
        user_name: 'Opportunity',
        image: 'assets/img/learnTech.png',
        content: 'Do you crave technology? Learn some of today\'s top programming languages using these free resources.',
        link: 'https://www.sololearn.com/courses'
      },
      {
        user_avtar: 'assets/img/money.jpg',
        user_name: 'Finance',
        image: 'assets/img/banker.png',
        content: 'Every penny counts. Learn how a Savings Worksheet can help you take control of your finances.',
        link: 'http://financialplanningdays.org/resources'
      },
      {
        user_avtar: 'assets/img/health.png',
        user_name: 'Health',
        image: 'assets/img/yoga.jpg',
        content: 'Take a deep breath. Here are some great resources to reduce stress with yoga.',
        link: 'https://www.yogajournal.com/teach/tools-for-teachers'
      },
      {
        user_avtar: 'assets/img/arrow.png',
        user_name: 'Opportunity',
        image: 'assets/img/opportunity.jpg',
        content: 'Get connected! Learn how LinkedIn can help jump start your career today.',
        link: 'https://www.linkedin.com/'
      }
    ];
  }
  addNewsFeed() {
    let addModal = this.modalCtrl.create('NewsfeedCreate');
    addModal.onDidDismiss(item => {
      if (item) {
        console.log(item);
        this.cardItems.push(item);
      }
    })
    addModal.present();
  }
}
