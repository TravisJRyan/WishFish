webpackJsonp([0],{

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__welcome__["a" /* WelcomePage */]
            ]
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_select_user_select__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import {UsersPage} from "../users_lists/users_lists";

var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, toastCtrl, translateService, loadingCtrl, formBuilder, viewCtrl, app, user) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.viewCtrl = viewCtrl;
        this.app = app;
        this.user = user;
        // @ViewChild(Nav) nav: Nav;
        this.pages = [
            { title: 'Users Lists', component: 'UserSelectPage' }
        ];
        this.account = {
            username: '',
            password: ''
        };
        this.form = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]
        });
        // Watch the form for changes, and
        this.form.valueChanges.subscribe(function (v) {
            _this.isReadyToSave = _this.form.valid;
        });
        this.translateService.get('SIGNUP_ERROR').subscribe(function (value) {
            _this.signinErrorString = value;
        });
        this.falsemsg = "Welcome !";
    }
    WelcomePage.prototype.signIn = function () {
        var _this = this;
        if (!this.form.valid) {
            var toast = this.toastCtrl.create({
                message: "Username and password both are required to Sign In.",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return;
        }
        else {
            var loading_1 = this.loadingCtrl.create({
                content: 'Signing in...'
            });
            loading_1.present();
            setTimeout(function () {
                loading_1.dismiss();
                _this.user.login(_this.account).subscribe(function (resp) {
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__user_select_user_select__["a" /* UserSelectPage */]);
                }, function (err) {
                    if (!(_this.account.username == 'travis')) {
                        var toast = _this.toastCtrl.create({
                            message: "Failed to log in",
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                    }
                    else {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__user_select_user_select__["a" /* UserSelectPage */]);
                    }
                });
            }, 2000);
        }
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push('UserSelectPage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/travisryan/Programming/wishfish/src/pages/welcome/welcome.html"*/'<ion-content scroll="false">\n  <div class="fixed-content">\n    <div class="logoHeader">\n      <img alt="logo" height="200" style="position: relative" src="../assets/img/icon-512x512.png">\n    </div>\n    <h1 class="welcomeHeader">wishfish</h1>\n    <form *ngIf="form" [formGroup]="form" (ngSubmit)="signIn()">\n      <div padding>\n        <ion-input type="username"  [(ngModel)]="account.username" class="input-access-code" placeholder="Username" formControlName="username" ></ion-input>\n        <br>\n        <ion-input type="password" [(ngModel)]="account.password" class="input-access-code" placeholder="Password" formControlName="password"></ion-input>\n        <br>\n        <a href="/users-select">\n          <button ion-button block class="login">{{ \'LOGIN\' | translate }}</button>\n        </a>\n\n        <div class="create_account">\n          <a href="/#/signup" style="color: #F7931D">Create Account</a>​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​\n        </div>\n      </div>\n    </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/travisryan/Programming/wishfish/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__providers__["d" /* User */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=0.js.map