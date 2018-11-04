import {Component, ViewChild} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {TranslateService} from '@ngx-translate/core';
import {Config, Nav, Platform, ToastController, LoadingController} from 'ionic-angular';
import {FirstRunPage} from '../pages';
import {Settings} from '../providers';

@Component({
  selector: 'side-main-menu',
  template: `<ion-menu [content]="content">

      <ion-content class="sideMenuIoncContent">
        
        <ion-list class="headerMAin">
          <ion-item style="background: #F7931D !important;">
            <ion-list class="logoImage" menuClose (click)="openPage(pages[3])">
              <div class="circle-pic" text-center #profilePic [style.background-image]="'url(../../assets/img/userImage.jpg)'"></div>
              <!--<img class="circle-pic" src="../../assets/img/userImage.jpg"/>-->
            </ion-list>
            <h3 class="userName">Tom</h3>
          </ion-item>
        </ion-list>
        
        <ion-list>
          
          <button menuClose ion-item no-lines style="border-top: 0.55px solid white; !important;"
                  [class.activeHIghlight]="checkActive(pages[5])" (click)="openPage(pages[5])" class="buttonSIdeBAr">
            <ion-icon ios="ios-list-box-outline" class="sidebarCss" md="ios-list-box-outline"></ion-icon>
            Go Fish
          </button>
          <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[2])"
                  (click)="openPage(pages[2])" class="buttonSIdeBAr">
            <ion-icon ios="ios-notifications-outline" class="sidebarCss" md="ios-notifications-outline"></ion-icon>
            Resources
          </button>
          
          <button menuClose ion-item no-lines [class.activeHIghlight]="checkActive(pages[3])"
                  (click)="openPage(pages[3])" class="buttonSIdeBAr">
            <ion-icon ios="ios-person-outline" class="sidebarCss" md="ios-person-outline"></ion-icon>
            Profile
          </button>
          
          <button menuClose no-lines style="border-bottom: 0.55px solid #383838; !important;" ion-item
                  [class.activeHIghlight]="checkActive(pages[0])" (click)="openPage(pages[0])" class="buttonSIdeBAr">
            <ion-icon class="sidebarCss" ios="ios-log-out-outline" md="ios-log-out-outline"></ion-icon>
            Logout
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-nav #content [root]="rootPage"></ion-nav>`
})


export class MyApp {

  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;
  activePage: any;

  pages: any[] = [
    {title: 'Welcome', component: 'WelcomePage'},
    {title: 'Signup', component: 'LoginPage'},
    // {title: 'Master Detail', component: 'ListMasterPage'},
    {title: 'News Feed', component: 'NewsFeed'},
    {title: 'Profile', component: 'ProfilePage'},
    {title: 'Users Lists', component: 'UsersPage'},
    {title: 'UserType', component: 'UserSelectPage'}
    // {title: 'Followers', component: 'Followers'},
    // {title: 'Following', component: 'Following'}
  ]


  constructor(private translate: TranslateService, platform: Platform, settings: Settings,
              private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen,
              public toastCtrl: ToastController, public loadingCtrl: LoadingController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.overlaysWebView(false);
      this.statusBar.backgroundColorByHexString('#1ABC9C');

    });
    this.initTranslate();
  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }
    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    if (page.component == "WelcomePage") {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });
      loading.present();
      setTimeout(() => {
        loading.dismiss();
        this.nav.setRoot(page.component);
        this.activePage = "random";
        let toast = this.toastCtrl.create({
          message: "You have successfully logged out",
          duration: 2000,
          position: 'top'
        });
        toast.present();
      }, 2000);
    } else {
      this.nav.setRoot(page.component);
      this.activePage = page;
      console.log(page.component);
    }
  }
  checkActive(page) {
    return page == this.activePage;
  }
}
