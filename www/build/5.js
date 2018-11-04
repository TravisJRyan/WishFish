webpackJsonp([5],{

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsfeedModule", function() { return NewsfeedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__newsfeed__ = __webpack_require__(351);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewsfeedModule = /** @class */ (function () {
    function NewsfeedModule() {
    }
    NewsfeedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__newsfeed__["a" /* NewsFeed */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__newsfeed__["a" /* NewsFeed */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__newsfeed__["a" /* NewsFeed */]
            ]
        })
    ], NewsfeedModule);
    return NewsfeedModule;
}());

//# sourceMappingURL=newsfeed.module.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsFeed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsFeed = /** @class */ (function () {
    function NewsFeed(navCtrl, modalCtrl, items, toastCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.items = items;
        this.toastCtrl = toastCtrl;
        this.press = 0;
        this.likes = 10;
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
    NewsFeed.prototype.addNewsFeed = function () {
        var _this = this;
        var addModal = this.modalCtrl.create('NewsfeedCreate');
        addModal.onDidDismiss(function (item) {
            if (item) {
                console.log(item);
                _this.cardItems.push(item);
            }
        });
        addModal.present();
    };
    NewsFeed = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'news-feed',template:/*ion-inline-start:"/Users/travisryan/Programming/wishfish/src/pages/newsfeed/newsfeed.html"*/'\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>Resources</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card *ngFor="let item of cardItems">\n\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="item.user_avtar">\n      </ion-avatar>\n      <h2>{{item.user_name}}</h2>\n    </ion-item>\n\n    <img (tap)="dblClickEvent($event,item.user_name)"  [src]="item.image">\n\n    <ion-card-content>\n      <a href="{{item.link}}">\n        <p>{{item.content}}</p>\n      </a>\n    </ion-card-content>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/travisryan/Programming/wishfish/src/pages/newsfeed/newsfeed.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers__["b" /* Items */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
    ], NewsFeed);
    return NewsFeed;
}());

//# sourceMappingURL=newsfeed.js.map

/***/ })

});
//# sourceMappingURL=5.js.map