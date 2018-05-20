webpackJsonp([7],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FormPage = /** @class */ (function () {
    function FormPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.register = {
            login: '',
            password: '',
            startAddress: '',
            endAddress: '',
            time: ''
        };
    }
    FormPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FormPage');
    };
    FormPage.prototype.registrer = function () {
        console.log(this.register);
    };
    FormPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-form',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/pages/form/form.html"*/'<!--\n  Generated template for the FormPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="conatainer">\n\n    <form (ngSubmit)="registrer()">\n      <ion-item>\n        <ion-label>\n          <ion-icon name="person"></ion-icon>\n        </ion-label>\n        <ion-input clearInput type="text" name="login" [(ngModel)]="register.login"></ion-input>\n      </ion-item>\n\n      <ion-item>\n          <ion-label>\n              <ion-icon name="locate"></ion-icon>\n          </ion-label>\n          <ion-input clearInput type="text" name="startAddress" [(ngModel)]="register.startAddress"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>\n                <ion-icon name="pin"></ion-icon>\n            </ion-label>\n            <ion-input clearInput type="text" name="endAddress" [(ngModel)]="register.endAddress"></ion-input>\n          </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name="ios-key"></ion-icon>\n        </ion-label>\n        <ion-input clearInput type="password" name="password" [(ngModel)]="register.password"></ion-input>\n      </ion-item>\n\n       <ion-item>\n          <ion-label>\n              <ion-icon name="clock"></ion-icon>\n          </ion-label>\n          <ion-datetime displayFormat="HH:mm" [(ngModel)]="register.time" name="time" class="time"></ion-datetime>\n     </ion-item>\n\n      <button type="submit" ion-button full color="light" class="btn-register">Cadastro</button>\n\n    </form>\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/pages/form/form.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FormPage);
    return FormPage;
}());

//# sourceMappingURL=form.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = { login: '', pass: '', name: 'Your Name', placa: 'KGB-8789', picture: 'https://api.randomuser.me/portraits/med/men/34.jpg', logged: true, driver: false };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.logForm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__home_home__["a" /* HomePage */], this.user);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/pages/login/login.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div class="container">\n    <form (ngSubmit)="logForm()">\n      <ion-item>\n        <ion-label>\n          <ion-icon name="person"></ion-icon>\n        </ion-label>\n        <ion-input clearInput type="text" name="login" [(ngModel)]="user.login"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>\n          <ion-icon name="ios-key"></ion-icon>\n        </ion-label>\n        <ion-input clearInput type="password" name="password" [(ngModel)]="user.pass"></ion-input>\n      </ion-item>\n\n      <button type="submit" ion-button full color="light" class="btn-login">Login</button>\n\n    </form>\n    <div class="user-pass">\n\n      <a href="">Esqueci a senha</a> /\n      <a href="">Esqueci o usuário</a>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/driver/driver.module": [
		281,
		6
	],
	"../pages/form/form.module": [
		282,
		5
	],
	"../pages/free/free.module": [
		283,
		4
	],
	"../pages/intro/intro.module": [
		285,
		3
	],
	"../pages/login/login.module": [
		284,
		2
	],
	"../pages/match-list/match-list.module": [
		286,
		1
	],
	"../pages/register/register.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DriverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the DriverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DriverPage = /** @class */ (function () {
    function DriverPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DriverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DriverPage');
    };
    DriverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-driver',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/pages/driver/driver.html"*/'<!--\n  Generated template for the DriverPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content padding>\n\n\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/pages/driver/driver.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], DriverPage);
    return DriverPage;
}());

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FreePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FreePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FreePage = /** @class */ (function () {
    function FreePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.status = { type: '', description: '' };
        //this.getRider();
        this.getDriver();
    }
    FreePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FreePage');
    };
    FreePage.prototype.getDriver = function () {
        this.status = { type: 'driver', description: 'Saindo' };
    };
    FreePage.prototype.getRider = function () {
        this.status = { type: 'rider', description: 'Livre' };
    };
    FreePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-free',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/pages/free/free.html"*/'<!--\n  Generated template for the FreePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content>\n  \n\n  <div class="container">\n\n    <div class="btn-status">\n\n        <car *ngIf="status.type == \'driver\'"  ></car>\n        <people *ngIf="status.type == \'rider\'"></people>\n\n    </div>\n\n    <div class="description-status">\n\n      <span class="name-status"> \n        {{ status.description }}  \n      </span>\n\n\n    </div>\n\n  </div>\n\n  \n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/pages/free/free.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], FreePage);
    return FreePage;
}());

//# sourceMappingURL=free.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.goToLogin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    IntroPage.prototype.goToRegister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/pages/intro/intro.html"*/'<!--\n  Generated template for the IntroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-content padding>\n\n  <div class="container">\n\n      <h1>RoadEasy</h1>\n\n      <div class="conatiner-buttons">\n        \n        <button ion-button full round color="light"   (click)="goToRegister()" class="btn-register">Cadastro</button>\n        \n        <button ion-button full round color="light" (click)="goToLogin()" class="btn-login">Login</button>\n\n      </div>\n\n      <div class="user-pass">\n\n        <a href="">Esqueci a senha</a> / \n        <a href="">Esqueci o usuário</a>\n\n      </div>\n\n      <div class="conatiner-buttons-social">\n        \n          <button ion-button round color="light" class="btn-register">Facebook</button>\n          \n          <button ion-button round color="light" class="btn-login">Google</button>\n  \n        </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the MatchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MatchListPage = /** @class */ (function () {
    function MatchListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getFakeData();
    }
    MatchListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchListPage');
    };
    MatchListPage.prototype.getFakeData = function () {
        var humans = [
            { name: 'Fulano 1', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 2', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'You', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 4', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 5', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 6', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 7', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 8', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 9', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 10', placa: 'KFC-3020', picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
        ];
        this.humans = humans;
    };
    MatchListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match-list',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/pages/match-list/match-list.html"*/'<!--\n  Generated template for the MatchListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Match</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ul>\n\n    <li *ngFor="let human of humans" [ngClass]="{\'active\': human.actualDriver}">\n      \n      <img src="{{ human.picture }}" alt=""/>\n      \n      <div class="info-human">\n          <span class="human-name">\n              {{ human.name }}\n          </span>\n          <span class="car-id">\n              {{ human.placa }}\n          </span>\n      </div>\n     \n      \n      \n    </li>\n\n  </ul>\n\n</ion-content>'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/pages/match-list/match-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], MatchListPage);
    return MatchListPage;
}());

//# sourceMappingURL=match-list.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_form_form__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_intro_intro__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_driver_driver__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_free_free__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_match_list_match_list__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_car_car__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_people_people__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_driver_driver__["a" /* DriverPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_free_free__["a" /* FreePage */],
                __WEBPACK_IMPORTED_MODULE_17__components_car_car__["a" /* CarComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_people_people__["a" /* PeopleComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_match_list_match_list__["a" /* MatchListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_form_form__["a" /* FormPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/driver/driver.module#DriverPageModule', name: 'DriverPage', segment: 'driver', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/form/form.module#FormPageModule', name: 'FormPage', segment: 'form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/free/free.module#FreePageModule', name: 'FreePage', segment: 'free', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/match-list/match-list.module#MatchListPageModule', name: 'MatchListPage', segment: 'match-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_intro_intro__["a" /* IntroPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_driver_driver__["a" /* DriverPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_free_free__["a" /* FreePage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_match_list_match_list__["a" /* MatchListPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_0__pages_form_form__["a" /* FormPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_form_form__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_form_form__["a" /* FormPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Contact" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the CarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CarComponent = /** @class */ (function () {
    function CarComponent() {
        console.log('Hello CarComponent Component');
        this.text = 'Hello World';
    }
    CarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'car',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/components/car/car.html"*/'<!-- Generated template for the CarComponent component -->\n<div>\n  \n \n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\n <style type="text/css">\n   .st0{fill:#81AC6F;}\n </style>\n <g>\n   <path class="st0" d="M348.3,269.3c-0.8-1.3-1.3-6.5-1.6-11.1c-0.3-4-0.7-8.6-1.4-12.6c-0.5-2.8-1.6-6.4-5.4-6.4\n     c-0.4,0-0.8,0-1.1,0.1c-0.2,0-0.5,0.1-0.9,0.1c0,0-0.1-0.1-0.3-0.6c-1.1-3.2-5.8-7.2-11.8-12c-1.5-1.2-3.2-2.6-4-3.4\n     c0.3-1.9,0.2-4.3-1.1-5.9c-0.6-0.8-1.8-1.7-3.8-1.7c-0.3,0-0.6,0-1.3,0.1c-1.5,0-4.4-0.6-8.4-1.4c-10.4-2.1-29.6-6.1-58.6-6.7\n     c-42.1-0.8-75.2,29.5-76.6,30.8l-1,0.9c-1.7,0.8-7.2,2.8-23.9,6.1c-23.7,4.7-28.2,12.2-29,15.1c-1.9,1.4-5,4.8-5.4,8.7\n     c-0.4,3.2-1.3,4.4-1.3,4.4l-0.4,0.5v22.3l0,0.4c1.3,5.9,7.4,9,17.7,9c3.3,0,5.8-0.3,5.7-0.3c0.1,0,1.4,0,3.6-0.1\n     c-0.2-0.6-0.4-1.3-0.6-1.9c-0.2-0.6-0.3-1.3-0.4-1.9c-0.3-1.5-0.4-3.1-0.4-4.7c0-13.7,11.1-24.8,24.8-24.8\n     c13.7,0,24.8,11.1,24.8,24.8c0,1.3-0.1,2.4-0.3,3.6c-0.1,0.6-0.2,1.3-0.4,1.9c-0.1,0.7-0.3,1.3-0.5,1.9c31-0.6,70.5-1.5,101-2.3\n     c-0.1-0.6-0.2-1.3-0.3-1.9c-0.1-0.6-0.1-1.3-0.2-1.9c0-0.4-0.1-0.9-0.1-1.3c0-13.7,11.1-24.8,24.8-24.8c13.5,0,24.5,10.8,24.8,24.3\n     c0,0.2,0,0.4,0,0.6c0,0.5-0.1,1-0.1,1.4c0,0.7-0.1,1.3-0.2,2c5.8-1,10.2-4,12.8-9C352.1,283.3,349.9,271.8,348.3,269.3z"/>\n   <path class="st0" d="M161.4,276.4c-11.6,0-21,9.4-21,21c0,1.6,0.2,3.1,0.5,4.6c0.1,0.6,0.3,1.3,0.5,1.9c0.2,0.7,0.4,1.3,0.7,1.9\n     c3.2,7.4,10.6,12.6,19.3,12.6c8.9,0,16.5-5.6,19.6-13.4c0.2-0.6,0.4-1.3,0.6-1.9c0.2-0.6,0.3-1.3,0.4-1.9c0.2-1.2,0.3-2.4,0.3-3.7\n     C182.4,285.8,173,276.4,161.4,276.4z"/>\n   <path class="st0" d="M310.4,276.4c-11.6,0-21,9.4-21,21c0,0.4,0,0.8,0.1,1.3c0,0.6,0.1,1.3,0.2,1.9c0.1,0.7,0.2,1.3,0.4,1.9\n     c2.3,9.2,10.5,15.9,20.4,15.9c10.3,0,18.9-7.4,20.7-17.2c0.1-0.6,0.2-1.3,0.3-1.9c0.1-0.6,0.1-1.2,0.1-1.9c0,0,0,0,0,0\n     C331.4,285.7,322,276.4,310.4,276.4z"/>\n </g>\n </svg>\n\n\n</div>\n'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/components/car/car.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CarComponent);
    return CarComponent;
}());

//# sourceMappingURL=car.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PeopleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PeopleComponent = /** @class */ (function () {
    function PeopleComponent() {
        console.log('Hello PeopleComponent Component');
        this.text = 'Hello World';
    }
    PeopleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'people',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/components/people/people.html"*/'<!-- Generated template for the PeopleComponent component -->\n<div>\n\n    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n    viewBox="0 0 500 500" style="enable-background:new 0 0 500 500;" xml:space="preserve">\n <style type="text/css">\n   .st0{fill:#81AC6F;}\n </style>\n <g>\n   <g>\n     <path class="st0" d="M223.7,197.6c0,9.9-8,17.8-17.8,17.8c-9.9,0-17.8-8-17.8-17.8c0-9.9,8-17.8,17.8-17.8\n       C215.7,179.7,223.7,187.7,223.7,197.6L223.7,197.6z M223.7,197.6"/>\n     <path class="st0" d="M318.1,350.8c-21.3-31.7-45.6-73.1-49.7-80.1c-0.4-1.3-0.9-2.5-1.5-3.8c-4.9-9.5-9.9-18.8-15.1-28.1\n       c5.5,0.4,11,0.8,16.5,1.3c3.8,7.4,7.5,14.9,11.3,22.3c6.1,12,24,1.4,18-10.5c-4.9-9.6-10.6-31.2-23.2-32.2\n       c-13.3-1-26.7-2.1-40-3.1c-0.3,0-0.6,0-0.9,0c-10.1-2.7-21.9,4.4-24,14.7c-6.8,14.8-16.6,26.3-33,31.1\n       c-12.9,3.8-7.4,23.9,5.5,20.1c16.2-4.8,27.9-14.1,36.8-26.3c5.3,9.5,10.6,19.2,15.6,28.9c-11,7.6-20.7,16.8-29.1,27.4\n       c-2.4,3-2.8,6-2,8.7c0,1,0,2,0.3,3.2c3.3,12.9,6.5,25.7,9.7,38.5c3.5,13.7,25.1,9.8,21.6-4c-3.1-12.2-6.2-24.5-9.3-36.7\n       c7.7-9.1,16.9-17.1,27.3-23c2.5-1.4,4-3.3,4.9-5.4c14.3,21.9,28.6,52.2,42.9,70.5C309.4,375.4,326.8,362,318.1,350.8L318.1,350.8z\n        M318.1,350.8"/>\n   </g>\n </g>\n </svg>\n \n\n</div>\n'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/components/people/people.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], PeopleComponent);
    return PeopleComponent;
}());

//# sourceMappingURL=people.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getActualList();
        this.humans.push(this.navParams.data);
        this.humans.sort(this.compare);
        console.log(this.humans);
    }
    HomePage.prototype.getActualList = function () {
        var shuffled = this.getGroup().sort(function () { return .5 - Math.random(); }); // shuffle  
        var selectedGroup = shuffled.slice(0, 3);
        this.humans = selectedGroup;
        this.generateActualDriver();
    };
    HomePage.prototype.generateActualDriver = function () {
        var shuffled = this.getGroup().sort(function () { return .5 - Math.random(); }); // shuffle  
        var selectedDriver = shuffled.slice(0, 1);
    };
    HomePage.prototype.getGroup = function () {
        var humans = [
            { name: 'Fulano 1', placa: 'KFC-3020', driver: false, logged: false, picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 2', placa: 'KFC-3020', driver: false, logged: false, picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 4', placa: 'KFC-3020', driver: false, logged: false, picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 5', placa: 'KFC-3020', driver: false, logged: false, picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 6', placa: 'KFC-3020', driver: false, logged: false, picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 7', placa: 'KFC-3020', driver: false, logged: false, picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 8', placa: 'KFC-3020', driver: false, logged: false, picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 9', placa: 'KFC-3020', driver: false, logged: false, picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
            { name: 'Fulano 10', placa: 'KFC-3020', driver: false, logged: false, picture: 'https://api.randomuser.me/portraits/med/men/47.jpg' },
        ];
        return humans;
    };
    // getFakeData(){
    //   let humans = [
    //     { name: 'Fulano 1', actualDriver: false },
    //     { name: 'Fulano 2', actualDriver: true },
    //     { name: 'Fulano 4', actualDriver: false },
    //   ]
    //   humans.sort(this.compare);
    //   this.humans = humans;
    // }
    HomePage.prototype.compare = function (a, b) {
        if (a.logged)
            return -1;
        if (b.logged)
            return 1;
        return 0;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Library/WebServer/Documents/uberhack/projeto/src/pages/home/home.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title></ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n\n<ion-content>\n  \n    <ul>\n\n        <li *ngFor="let human of humans" [ngClass]="{\'active\': human.logged}">\n          \n          <img src="{{ human.picture }}" alt=""/>\n          \n          <div class="info-human">\n              <span class="human-name">\n                    {{ human.name }}\n              </span>\n              <span class="car-id">\n                  {{ human.placa }}\n              </span>\n          </div>\n         \n          \n          \n        </li>\n    \n      </ul>\n\n      <button ion-button full round color="light"  class="btn-confirm">Confirmar</button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Library/WebServer/Documents/uberhack/projeto/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map