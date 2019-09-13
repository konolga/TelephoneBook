(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");





var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        this.alertify.error('You are not authorized');
        this.router.navigate(['/']);
        return false;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_4__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_models/contact.ts":
/*!************************************!*\
  !*** ./src/app/_models/contact.ts ***!
  \************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact(id, name, telephone) {
        this.id = id;
        this.name = name;
        this.telephone = telephone;
    }
    Contact.ctorParameters = function () { return [
        { type: String },
        { type: String },
        { type: String }
    ]; };
    return Contact;
}());



/***/ }),

/***/ "./src/app/_routes/app-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/_routes/app-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _contact_create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contact/create/create.component */ "./src/app/contact/create/create.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: 'create', component: _contact_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"] },
            { path: 'edit/:contactId', component: _contact_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"] },
            { path: 'upload', component: _contact_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"] },
            { path: 'contacts', component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_4__["ContactsComponent"] }
        ]
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/_services/alertify.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/alertify.service.ts ***!
  \***********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");


var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else { }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/_services/auth.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/auth.service.ts ***!
  \*******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./src/node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./src/node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./src/node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");







var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/auth';
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.regStatus = false;
    }
    AuthService.prototype.login = function (model) {
        var _this = this;
        return this.http.post(this.baseUrl + '/login', model)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('titlecase', user.email);
                _this.router.navigate(['/contacts']);
            }
        }));
    };
    AuthService.prototype.signup = function (model) {
        return this.http.post(this.baseUrl + '/signup', model);
    };
    AuthService.prototype.loggedIn = function () {
        var token = localStorage.getItem('token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/_services/contacts.service.ts":
/*!***********************************************!*\
  !*** ./src/app/_services/contacts.service.ts ***!
  \***********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./src/node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./src/node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./src/node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var BACKEND_URL = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
var ContactsService = /** @class */ (function () {
    function ContactsService(http, router) {
        this.http = http;
        this.router = router;
        this.contacts = [];
        this.contactsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ContactsService.prototype.getContacts = function () {
        var _this = this;
        this.http
            .get(BACKEND_URL + '/contacts/')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data.contacts.map(function (contact) {
                return {
                    name: contact.name,
                    telephone: contact.telephone,
                    id: contact._id
                };
            });
        }))
            .subscribe(function (transformedContacts) {
            _this.contacts = transformedContacts;
            _this.contactsUpdated.next(_this.contacts.slice());
        });
    };
    ContactsService.prototype.filterContacts = function (searchString) {
        this.getContacts();
        return this.contacts.filter(function (contact) { return contact.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1; });
    };
    ContactsService.prototype.getContactsUpdateListener = function () {
        return this.contactsUpdated.asObservable();
    };
    ContactsService.prototype.addContact = function (name, telephone) {
        var _this = this;
        var contact = { id: null, name: name, telephone: telephone };
        this.http
            .post(BACKEND_URL + '/contacts/', contact)
            .subscribe(function (responseData) {
            var id = responseData.contactId;
            contact.id = id;
            _this.contacts.push(contact);
            _this.contactsUpdated.next(_this.contacts.slice());
            _this.router.navigate(['/']);
        });
    };
    ContactsService.prototype.deleteContact = function (contactId) {
        var _this = this;
        this.http.delete(BACKEND_URL + '/contacts/' + contactId)
            .subscribe(function () {
            var contactsUpdated = _this.contacts.filter(function (contact) { return contact.id !== contactId; });
            _this.contacts = contactsUpdated;
            _this.contactsUpdated.next(_this.contacts.slice());
        });
    };
    ContactsService.prototype.getContact = function (id) {
        return this.http.get(BACKEND_URL + '/contacts/' + id);
    };
    ContactsService.prototype.updateContact = function (id, name, telephone) {
        var _this = this;
        var contact = { id: id, name: name, telephone: telephone };
        this.http
            .put(BACKEND_URL + '/contacts/' + id, contact)
            .subscribe(function (response) {
            var updatedContacts = _this.contacts.slice();
            var oldContactIndex = updatedContacts.findIndex(function (p) { return p.id === contact.id; });
            updatedContacts[oldContactIndex] = contact;
            _this.contacts = updatedContacts;
            _this.contactsUpdated.next(_this.contacts.slice());
            _this.router.navigate(['/']);
        });
    };
    ContactsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    ContactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], ContactsService);
    return ContactsService;
}());



/***/ }),

/***/ "./src/app/_services/fbAuth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/fbAuth.service.ts ***!
  \*********************************************/
/*! exports provided: FbAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbAuthService", function() { return FbAuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./src/node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./src/node_modules/rxjs/_esm5/operators/index.js");






var FbAuthService = /** @class */ (function () {
    function FbAuthService(http, router) {
        this.http = http;
        this.router = router;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/auth';
    }
    FbAuthService.prototype.socialLogin = function (data) {
        var _this = this;
        return this.http.post(this.baseUrl + '/social-login', data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (response) {
            var user = response;
            if (user) {
                localStorage.setItem('token', user.token);
                localStorage.setItem('email', user.email);
                _this.router.navigate(['/contacts']);
            }
        }));
    };
    FbAuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    FbAuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], FbAuthService);
    return FbAuthService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./src/node_modules/@auth0/angular-jwt/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
    }
    /* loadedFeature: string ='all-contacts';
    
      onNavigate(feature: string) {
      this.loadedFeature = feature; */
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        if (token) {
            this.authService.decodedToken = this.jwtHelper.decodeToken(token);
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./src/node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: provideConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provideConfig", function() { return provideConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./src/node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./src/node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./src/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./src/node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-text-mask */ "./src/node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./src/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./src/node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contacts_contacts_list_contacts_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contacts/contacts-list/contacts-list.component */ "./src/app/contacts/contacts-list/contacts-list.component.ts");
/* harmony import */ var _contact_create_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/create/create.component */ "./src/app/contact/create/create.component.ts");
/* harmony import */ var _contact_details_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/details/details.component */ "./src/app/contact/details/details.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./contacts/contacts.component */ "./src/app/contacts/contacts.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_routes/app-routing.module */ "./src/app/_routes/app-routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _services_fbAuth_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./_services/fbAuth.service */ "./src/app/_services/fbAuth.service.ts");
























var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["FacebookLoginProvider"]('2350528848532809')
    }
]);
function provideConfig() {
    return config;
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _contacts_contacts_list_contacts_list_component__WEBPACK_IMPORTED_MODULE_11__["ContactsListComponent"],
                _contact_create_create_component__WEBPACK_IMPORTED_MODULE_12__["CreateComponent"],
                _contact_details_details_component__WEBPACK_IMPORTED_MODULE_13__["DetailsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_15__["ContactsComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_19__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _routes_app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_16__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_6__["TextMaskModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["SocialLoginModule"]
            ],
            providers: [
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_20__["AlertifyService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"],
                _guards_auth_guard__WEBPACK_IMPORTED_MODULE_22__["AuthGuard"],
                _services_fbAuth_service__WEBPACK_IMPORTED_MODULE_23__["FbAuthService"],
                {
                    provide: angularx_social_login__WEBPACK_IMPORTED_MODULE_9__["AuthServiceConfig"],
                    useFactory: provideConfig
                },
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/create/create.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact/create/create.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card{\n  width: 400px;\n}\nmat-form-field,\ntextarea {\n  width: 350px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJke1xuICB3aWR0aDogNDAwcHg7XG59XG5tYXQtZm9ybS1maWVsZCxcbnRleHRhcmVhIHtcbiAgd2lkdGg6IDM1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/contact/create/create.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact/create/create.component.ts ***!
  \****************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/contacts.service */ "./src/app/_services/contacts.service.ts");




var CreateComponent = /** @class */ (function () {
    function CreateComponent(contactsService, route) {
        this.contactsService = contactsService;
        this.route = route;
        this.mask = ['(', /[0-9]/, /\d/, /\d/, ')', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.isLoading = false;
        this.mode = 'create';
    }
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has('contactId')) {
                _this.mode = 'edit';
                _this.contactId = paramMap.get('contactId');
                _this.isLoading = true;
                _this.contactsService.getContact(_this.contactId).subscribe(function (data) {
                    _this.isLoading = false;
                    _this.contact = { id: data._id, name: data.name, telephone: data.telephone };
                });
            }
            else {
                _this.mode = 'create';
                _this.contactId = null;
            }
        });
    };
    CreateComponent.prototype.onSaveContact = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === 'create') {
            this.contactsService.addContact(form.value.name, form.value.telephone);
            this.wasCreated = true;
            this.contactCreated = { id: null, name: form.value.name, telephone: form.value.telephone };
        }
        else {
            this.contactsService.updateContact(this.contactId, form.value.name, form.value.telephone);
        }
        form.resetForm();
    };
    CreateComponent.prototype.onFormValidation = function (form) {
        return form.invalid;
    };
    CreateComponent.ctorParameters = function () { return [
        { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_3__["ContactsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! raw-loader!./create.component.html */ "./src/node_modules/raw-loader/index.js!./src/app/contact/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/contact/create/create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contacts_service__WEBPACK_IMPORTED_MODULE_3__["ContactsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/contact/details/details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/contact/details/details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-responsive {\n  /* content: url('../../../assets/Contacts.jpg'); */\n  font-size: 80px;\n  display: block;\n  margin:  auto;\n  color:#3f51b5;\n\n\n}\n.card-avatar {\n  margin-right:  40px;\n}\n.card {\n  width: 400px;\n  margin-top: 60px;\n  position: fixed;\n  text-align: center;\n  display: inline-block;\n\n}\n.card-header{\n  display: inline-block;\n  margin-top: 25px;\n}\n.row {\n  margin: 0px;\n  margin-bottom: 30px;\n}\nmat-card-header {\n  display: inline-block;\n  margin-top: 50px;\n  height: 150px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9kZXRhaWxzL2RldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtEQUFrRDtFQUNsRCxlQUFlO0VBQ2YsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhOzs7QUFHZjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIscUJBQXFCOztBQUV2QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQjtBQUdBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltZy1yZXNwb25zaXZlIHtcbiAgLyogY29udGVudDogdXJsKCcuLi8uLi8uLi9hc3NldHMvQ29udGFjdHMuanBnJyk7ICovXG4gIGZvbnQtc2l6ZTogODBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogIGF1dG87XG4gIGNvbG9yOiMzZjUxYjU7XG5cblxufVxuLmNhcmQtYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiAgNDBweDtcbn1cblxuLmNhcmQge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbn1cblxuLmNhcmQtaGVhZGVye1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cblxuLnJvdyB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxubWF0LWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/contact/details/details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/contact/details/details.component.ts ***!
  \******************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_models/contact */ "./src/app/_models/contact.ts");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/contacts.service */ "./src/app/_services/contacts.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./src/node_modules/@angular/animations/fesm5/animations.js");





var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(contactsService) {
        this.contactsService = contactsService;
        this.state = 'normal';
    }
    DetailsComponent.prototype.ngOnInit = function () {
    };
    DetailsComponent.prototype.ngOnChanges = function (changes) {
        var contact = changes.contact;
        this.state === 'highlighted' ? this.state = 'normal' : this.state = 'highlighted';
    };
    DetailsComponent.prototype.animationEnded = function () {
        this.state = 'normal';
    };
    DetailsComponent.prototype.onDelete = function (contactId) {
        this.contactsService.deleteContact(contactId);
        this.contact = null;
    };
    DetailsComponent.ctorParameters = function () { return [
        { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_3__["ContactsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_contact__WEBPACK_IMPORTED_MODULE_2__["Contact"])
    ], DetailsComponent.prototype, "contact", void 0);
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! raw-loader!./details.component.html */ "./src/node_modules/raw-loader/index.js!./src/app/contact/details/details.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('state', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        backgroundColor: 'white'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('highlighted', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                        backgroundColor: '#3f51b5'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('highlighted=>normal', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])(1500))
                ])
            ],
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/contact/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contacts_service__WEBPACK_IMPORTED_MODULE_3__["ContactsService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts-list/contacts-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/contacts/contacts-list/contacts-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.icon {\n  text-align: center;\n\n}\n\nmat-form-field {\n  width: 100%;\n\n}\n\nmat-card-avatar {\n    max-width: 400px;\n  }\n\n.hover-color:hover{\n    color:white;\n    background-color:#3f51b5;\n    -webkit-text-decoration-color: #fff;\n            text-decoration-color: #fff;\n    cursor:pointer\n  }\n\n.card{\n    color:#3f51b5;\n    background-color:white;\n    -webkit-text-decoration-color: #fff;\n            text-decoration-color: #fff;\n    cursor:pointer\n  }\n\n.selected-color{\n    background-color:#AD6666;\n  }\n\na {\n    display: grid;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvY29udGFjdHMtbGlzdC9jb250YWN0cy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCOztBQUVwQjs7QUFFQTtFQUNFLFdBQVc7O0FBRWI7O0FBR0U7SUFDRSxnQkFBZ0I7RUFDbEI7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0I7RUFDRjs7QUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQjtFQUNGOztBQUlBO0lBQ0Usd0JBQXdCO0VBQzFCOztBQUdBO0lBQ0UsYUFBYTtFQUNmIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdHMtbGlzdC9jb250YWN0cy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5pY29uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG5cbn1cblxuXG4gIG1hdC1jYXJkLWF2YXRhciB7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgfVxuXG4uaG92ZXItY29sb3I6aG92ZXJ7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojM2Y1MWI1O1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6cG9pbnRlclxuICB9XG5cbiAgLmNhcmR7XG4gICAgY29sb3I6IzNmNTFiNTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6cG9pbnRlclxuICB9XG5cblxuXG4gIC5zZWxlY3RlZC1jb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNBRDY2NjY7XG4gIH1cblxuXG4gIGEge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contacts/contacts-list/contacts-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/contacts/contacts-list/contacts-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsListComponent", function() { return ContactsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/contacts.service */ "./src/app/_services/contacts.service.ts");



var ContactsListComponent = /** @class */ (function () {
    function ContactsListComponent(contactsService) {
        this.contactsService = contactsService;
        this.contacts = [];
        this.filteredContacts = [];
        this.contactWasSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(ContactsListComponent.prototype, "searchTerm", {
        get: function () {
            return this._searchTerm;
        },
        set: function (value) {
            this._searchTerm = value;
            this.filteredContacts = this.contactsService.filterContacts(value);
        },
        enumerable: true,
        configurable: true
    });
    ContactsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contactsService.getContacts();
        this.contactsSub = this.contactsService.getContactsUpdateListener()
            .subscribe(function (contacts) {
            if (_this.searchTerm) {
                _this.contacts = _this.filteredContacts;
            }
            else {
                _this.contacts = contacts;
            }
        });
    };
    ContactsListComponent.prototype.onSelected = function (contact) {
        this.contactWasSelected.emit(contact);
    };
    ContactsListComponent.prototype.ngOnDestroy = function () {
        this.contactsSub.unsubscribe();
    };
    ContactsListComponent.ctorParameters = function () { return [
        { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContactsListComponent.prototype, "contactWasSelected", void 0);
    ContactsListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts-list',
            template: __webpack_require__(/*! raw-loader!./contacts-list.component.html */ "./src/node_modules/raw-loader/index.js!./src/app/contacts/contacts-list/contacts-list.component.html"),
            styles: [__webpack_require__(/*! ./contacts-list.component.css */ "./src/app/contacts/contacts-list/contacts-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_contacts_service__WEBPACK_IMPORTED_MODULE_2__["ContactsService"]])
    ], ContactsListComponent);
    return ContactsListComponent;
}());



/***/ }),

/***/ "./src/app/contacts/contacts.component.css":
/*!*************************************************!*\
  !*** ./src/app/contacts/contacts.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/contacts/contacts.component.ts":
/*!************************************************!*\
  !*** ./src/app/contacts/contacts.component.ts ***!
  \************************************************/
/*! exports provided: ContactsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsComponent", function() { return ContactsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_models/contact */ "./src/app/_models/contact.ts");



var ContactsComponent = /** @class */ (function () {
    function ContactsComponent() {
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_contact__WEBPACK_IMPORTED_MODULE_2__["Contact"])
    ], ContactsComponent.prototype, "selectedContact", void 0);
    ContactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacts',
            template: __webpack_require__(/*! raw-loader!./contacts.component.html */ "./src/node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html"),
            styles: [__webpack_require__(/*! ./contacts.component.css */ "./src/app/contacts/contacts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactsComponent);
    return ContactsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container {\n  min-width: 60px;\n  background-color:  #3f51b5\n}\n\nmat-sidenav-content{\n  width:100%;\n  height: calc(100vh - 100px);\n  background-color:  white\n}\n\nmat-sidenav{\n  margin-left: 20px;\n\n  background-color:  #3f51b5;\n\n}\n\n.label{\n  display: inline-block;\n  margin-left: 10px;\n}\n\na {\ntext-decoration: none;\ncolor: white;\n}\n\na:hover,\na:active {\n  color: darkgrey;\n}\n\n.navigation-items {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  cursor: pointer;\n}\n\n.icon {\n  display: inline-block;\n  margin: 0 auto;\n\n  vertical-align: text-bottom;\n  font-size: 24px;\n}\n\n.logout {\nmargin-right: -5px;\n}\n\n.upload {\n\n  font-size: 28px;\n}\n\nbody {\n  margin: 0;\n}\n\nform {\n  display: flex;\n  align-items: flex-end;\n}\n\n.loginForm{\n  position: absolute;\n  right: 20px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBaUI7O0VBRWpCLDBCQUEwQjs7QUFFNUI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUdBO0FBQ0EscUJBQXFCO0FBQ3JCLFlBQVk7QUFDWjs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjOztFQUVkLDJCQUEyQjtFQUMzQixlQUFlO0FBQ2pCOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XG4gIG1pbi13aWR0aDogNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogICMzZjUxYjVcbn1cblxubWF0LXNpZGVuYXYtY29udGVudHtcbiAgd2lkdGg6MTAwJTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTAwcHgpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAgd2hpdGVcbn1cbm1hdC1zaWRlbmF2e1xuICBtYXJnaW4tbGVmdDogMjBweDtcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzNmNTFiNTtcblxufVxuXG4ubGFiZWx7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cblxuYSB7XG50ZXh0LWRlY29yYXRpb246IG5vbmU7XG5jb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIsXG5hOmFjdGl2ZSB7XG4gIGNvbG9yOiBkYXJrZ3JleTtcbn1cblxuLm5hdmlnYXRpb24taXRlbXMge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xuXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4ubG9nb3V0IHtcbm1hcmdpbi1yaWdodDogLTVweDtcbn1cblxuLnVwbG9hZCB7XG5cbiAgZm9udC1zaXplOiAyOHB4O1xufVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuLmxvZ2luRm9ybXtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, alertify, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.router = router;
        // @Output() featureSelected = new EventEmitter<string>();
        this.model = {};
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    /*     onSelect(feature: string) {
        this.featureSelected.emit(feature);
      } */
    HeaderComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model).subscribe(function () {
            _this.alertify.success('logged in successfully');
        }, function (error) {
            _this.alertify.error('error');
        }, function () {
            _this.router.navigate(['/contacts']);
        });
    };
    HeaderComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    HeaderComponent.prototype.logout = function () {
        localStorage.removeItem('token');
        this.alertify.message('logged out');
        this.router.navigate(['/upload']);
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], HeaderComponent.prototype, "email", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./src/node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h4 {\n  text-align: center;\n  color: cornflowerblue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.registerMode = false;
        this.isRegistered = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.registerToggle = function () {
        this.registerMode = true;
    };
    HomeComponent.prototype.cancelRegisterMode = function (registerMode) {
        this.registerMode = false;
    };
    HomeComponent.prototype.markAsRegistered = function (isRegistered) {
        this.isRegistered = true;
    };
    HomeComponent.prototype.loggedIn = function () {
        return this.authService.loggedIn();
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./src/node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./src/node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#login-box {\n  display: inline-block;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: auto;\n  width: 600px;\n  height: 460px;\n  border-radius: 2px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n    font-family: 'Roboto', sans-serif;\n}\n\n.top {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n\n\n  width: 600px;\n  height: 60px;\n}\n\nh1{\n  margin: 10px;\n  text-align: center;\n}\n\n.left, .right{\n  position: absolute;\n  top: 60px;\n  box-sizing: border-box;\n  padding: 40px;\n  width: 300px;\n  height: 400px;\n}\n\n.left {\n  left: 0;\n}\n\n.right {\n  right: 0;\n  background: url('sea.jpg');\n  background-size: cover;\n  background-position: center;\n  border-radius: 0 2px 2px 0;\n}\n\n.full-width {\n  display: block;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n  padding: 4px;\n  width: 220px;\n  \n  border: none;\n\n  font-size: 15px;\n  transition: 0.2s ease;\n}\n\n.or {\n  position: absolute;\n  top: 180px;\n  left: 280px;\n  width: 40px;\n  height: 40px;\n  background: #DDD;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  line-height: 40px;\n  text-align: center;\n}\n\n.loginwith {\n  display: block;\n  margin-bottom: 40px;\n  font-size: 28px;\n  color: #FFF;\n  text-align: center;\n}\n\nbutton {\n  margin-bottom: 20px;\n  width: 220px;\n  border-radius: 2px;\n  color: #FFF;\n  font-weight: 500;\n\n}\n\nbutton.submit:hover,\nbutton.submit:focus,\nbutton.cancel:hover,\nbutton.cancel:focus,\nbutton.social-signin:hover,\nbutton.social-signin:focus {\n  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease;\n}\n\nbutton.social-signin:active {\n\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease;\n}\n\nbutton.social-signin.facebook {\n  background: #32508E;\n}\n\nbutton.social-signin.twitter {\n  background: #55ACEE;\n}\n\nbutton.social-signin.google {\n  background: #DD4B39;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix3Q0FBd0M7SUFDdEMsaUNBQWlDO0FBQ3JDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1Asc0JBQXNCOzs7RUFHdEIsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFDQTtFQUNFLE9BQU87QUFDVDs7QUFDQTtFQUNFLFFBQVE7RUFDUiwwQkFBdUM7RUFDdkMsc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTs7RUFFWixZQUFZOztFQUVaLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBSUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjs7QUFFbEI7O0FBRUE7Ozs7OztFQU1FLHlDQUF5QztFQUN6QyxxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsd0NBQXdDO0VBQ3hDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2xvZ2luLWJveCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDQ2MHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xufVxuXG4udG9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cblxuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cbmgxe1xuICBtYXJnaW46IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5sZWZ0LCAucmlnaHR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiA0MHB4O1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG59XG4ubGVmdCB7XG4gIGxlZnQ6IDA7XG59XG4ucmlnaHQge1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvc2VhLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIHdpZHRoOiAyMjBweDtcbiAgXG4gIGJvcmRlcjogbm9uZTtcblxuICBmb250LXNpemU6IDE1cHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuXG4ub3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTgwcHg7XG4gIGxlZnQ6IDI4MHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kOiAjREREO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuXG4ubG9naW53aXRoIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDIyMHB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXdlaWdodDogNTAwO1xuXG59XG5cbmJ1dHRvbi5zdWJtaXQ6aG92ZXIsXG5idXR0b24uc3VibWl0OmZvY3VzLFxuYnV0dG9uLmNhbmNlbDpob3ZlcixcbmJ1dHRvbi5jYW5jZWw6Zm9jdXMsXG5idXR0b24uc29jaWFsLXNpZ25pbjpob3ZlcixcbmJ1dHRvbi5zb2NpYWwtc2lnbmluOmZvY3VzIHtcbiAgYm94LXNoYWRvdzogMCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cblxuYnV0dG9uLnNvY2lhbC1zaWduaW46YWN0aXZlIHtcblxuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbmJ1dHRvbi5zb2NpYWwtc2lnbmluLmZhY2Vib29rIHtcbiAgYmFja2dyb3VuZDogIzMyNTA4RTtcbn1cblxuYnV0dG9uLnNvY2lhbC1zaWduaW4udHdpdHRlciB7XG4gIGJhY2tncm91bmQ6ICM1NUFDRUU7XG59XG5cbmJ1dHRvbi5zb2NpYWwtc2lnbmluLmdvb2dsZSB7XG4gIGJhY2tncm91bmQ6ICNERDRCMzk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./src/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/auth.service */ "./src/app/_services/auth.service.ts");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/alertify.service */ "./src/app/_services/alertify.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./src/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var _services_fbAuth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/fbAuth.service */ "./src/app/_services/fbAuth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./src/node_modules/@angular/router/fesm5/router.js");








var SignupComponent = /** @class */ (function () {
    // this is for the letters (both uppercase and lowercase) and numbers validation
    function SignupComponent(authService, alertify, socialAuthService, fbAuthService, router) {
        this.authService = authService;
        this.alertify = alertify;
        this.socialAuthService = socialAuthService;
        this.fbAuthService = fbAuthService;
        this.router = router;
        this.cancelRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.markAsRegistered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.model = {};
        this.hide = true;
        this.registered = false;
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]);
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socialAuthService.authState.subscribe(function (user) {
            _this.user = user;
            _this.loggedIn = (user != null);
            console.log(_this.user);
        });
    };
    SignupComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    SignupComponent.prototype.getPasswordErrorMessage = function () {
        return this.password.hasError('required') ? 'You must enter a value' :
            this.password.hasError('minLength') ? 'Password must be at least 6 characters long' :
                this.password.hasError('pattern') ? 'Your password must contain at least one uppercase, one lowercase, and one number' :
                    '';
    };
    SignupComponent.prototype.signUp = function () {
        var _this = this;
        this.authService.signup(this.model).subscribe(function () {
            _this.alertify.success('signed up successfully');
            _this.markAsRegistered.emit(true);
        }, function (error) {
            _this.alertify.error('error');
            console.log(error);
        }, function () {
            _this.cancel();
        });
    };
    SignupComponent.prototype.facebookSignIn = function () {
        var _this = this;
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["FacebookLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this.fbAuthService.socialLogin(userData).subscribe(function (response) {
                _this.markAsRegistered.emit(true);
                _this.alertify.success('signed up successfully');
                _this.cancel();
            }, function (error) {
                _this.alertify.error('error');
                console.log(error);
            });
        });
    };
    SignupComponent.prototype.cancel = function () {
        this.cancelRegister.emit(false);
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"] },
        { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _services_fbAuth_service__WEBPACK_IMPORTED_MODULE_6__["FbAuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupComponent.prototype, "cancelRegister", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SignupComponent.prototype, "markAsRegistered", void 0);
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./src/node_modules/raw-loader/index.js!./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_alertify_service__WEBPACK_IMPORTED_MODULE_3__["AlertifyService"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _services_fbAuth_service__WEBPACK_IMPORTED_MODULE_6__["FbAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: 'http://telephonebook.us-east-2.elasticbeanstalk.com/api'
    //apiUrl: 'http://localhost:8090/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./src/node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./src/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./src/node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/node_modules/@angular/core/fesm5 lazy recursive":
/*!********************************************************************!*\
  !*** ./src/node_modules/@angular/core/fesm5 lazy namespace object ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/node_modules/@angular/core/fesm5 lazy recursive";

/***/ }),

/***/ "./src/node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!******************************************************************!*\
  !*** ./src/node_modules/raw-loader!./src/app/app.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <app-header></app-header>\n\n\n\n\n\n \n"

/***/ }),

/***/ "./src/node_modules/raw-loader/index.js!./src/app/contact/create/create.component.html":
/*!************************************************************************************!*\
  !*** ./src/node_modules/raw-loader!./src/app/contact/create/create.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-12 col-xs-12\">\n\n    <mat-card>\n        <form (submit)=\"onSaveContact(postForm)\" #postForm=\"ngForm\"\n        *ngIf=\"!isLoading\">\n          <mat-form-field>\n            <input\n              matInput\n              type=\"text\"\n              name=\"name\"\n              [ngModel]=\"contact?.name\"\n              required\n              minlength=\"3\"\n              placeholder=\"Contact name\"\n              #title=\"ngModel\">\n          </mat-form-field>\n          <mat-form-field>\n            <input\n              matInput\n              name=\"telephone\"\n              type=\"text\"\n              [ngModel]=\"contact?.telephone\"\n              required\n              placeholder=\"(123) 456-7890\"\n              [textMask]=\"{mask: mask}\"\n              pattern=\"\\(\\d{3}\\)\\d{3}-\\d{4}\"\n              #content=\"ngModel\">\n          </mat-form-field>\n          <button\n          mat-raised-button color=\"primary\"\n           type=\"submit\"\n           [disabled]=\"onFormValidation(postForm)\"\n           >SAVE</button>\n        </form>\n      </mat-card>\n\n\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/node_modules/raw-loader/index.js!./src/app/contact/details/details.component.html":
/*!**************************************************************************************!*\
  !*** ./src/node_modules/raw-loader!./src/app/contact/details/details.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  *ngIf=\"contact\" class=\"card\">\n  <mat-toolbar color=\"primary\" class=\"col-md-12\">\n    <mat-toolbar-row class=\"card-header\">\n      <span (click)=\"Animate()\"> Selected contact details</span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n\n  <mat-card\n  class=\"col-md-12\"\n\n   [@state]=\"state\"\n   (@state.done)=\"animationEnded($event)\"\n   >\n    <div class=\"card-avatar\">\n      <mat-icon mat-card-avatar class=\"img-responsive\">contact_phone</mat-icon>\n    </div>\n\n\n    <mat-card-header>\n      <mat-card-title>\n        <h1 class=\"heading\">{{contact.name}}</h1>\n      </mat-card-title>\n\n\n      <mat-card-subtitle>\n        <h1 class=\"text\">{{contact.telephone}}</h1>\n      </mat-card-subtitle>\n\n    </mat-card-header>\n    <mat-card-actions>\n\n      <div class=\"row col-md-12\">\n        <div class=\"button col-md-6\">\n          <a mat-raised-button color=\"primary\" [routerLink]=\"['/edit', contact.id]\">UPDATE</a>\n        </div>\n\n\n        <div class=\"button col-md-6\">\n          <button mat-raised-button color=\"warn\" (click)=\"onDelete(contact.id)\">DELETE</button>\n        </div>\n      </div>\n\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/node_modules/raw-loader/index.js!./src/app/contacts/contacts-list/contacts-list.component.html":
/*!***************************************************************************************************!*\
  !*** ./src/node_modules/raw-loader!./src/app/contacts/contacts-list/contacts-list.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n      <form #contactForm=\"ngForm\">\n        <mat-form-field>\n\n          <input [(ngModel)]=\"searchTerm\" class=\"md-block\" matInput type=\"text\" name=\"name\"\n            placeholder=\"Search contact by name...\">\n\n        </mat-form-field>\n      </form>\n\n      <mat-card *ngFor='let contact of contacts; let i = index'\n        (click)=\"onSelected(contact)\"\n        class=\"card\"\n        [ngClass]=\"{'hover-color': contact.hoverActive }\"\n         (mouseover)=\"contact.hoverActive = true\">\n\n        <mat-card-header >\n          <a>\n            <mat-icon  mat-card-avatar class=\"icon\">person</mat-icon>\n            <mat-icon mat-card-avatar class=\"icon\">phone</mat-icon>\n          </a>\n          <a>\n            <mat-card-title class=\"list group item heading\">{{contact.name}}</mat-card-title>\n            <mat-card-subtitle class=\"list group item text\">{{contact.telephone}}</mat-card-subtitle>\n          </a>\n        </mat-card-header>\n      </mat-card>\n    </div>\n  </div>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/node_modules/raw-loader/index.js!./src/app/contacts/contacts.component.html":
/*!********************************************************************************!*\
  !*** ./src/node_modules/raw-loader!./src/app/contacts/contacts.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"col-xs-12 col-md-12\">\n\n        <div class=\"col-md-6 pull-right\">\n            <app-details\n            *ngIf=\"selectedContact\"\n            [contact]=\"selectedContact\">\n          </app-details>\n            </div>\n\n\n        <div class=\"col-md-6 pull-left\">\n          <app-contacts-list\n          (contactWasSelected)=\"selectedContact = $event\"\n          ></app-contacts-list>\n        </div>\n\n\n    </div>\n"

/***/ }),

/***/ "./src/node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!****************************************************************************!*\
  !*** ./src/node_modules/raw-loader!./src/app/header/header.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n\n    <div fxHide.gt-sm *ngIf=\"loggedIn()\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </div>\n\n    <div>\n      <a routerLink=\"/\">\n        <mat-icon class=\"icon\">home</mat-icon>\n        Telephone Book\n      </a>\n    </div>\n\n\n    <div *ngIf=\"loggedIn()\" fxFlex fxLayout fxLayoutAlign=\"flex-end\" fxHide fxShow.gt-sm>\n      <ul fxLayout fxLayoutGap=\"25px\" class=\"navigation-items\">\n        <li>\n          <a routerLink=\"/contacts\">\n            <mat-icon class=\"icon\">group</mat-icon>\n            <span class=\"label\">All contacts</span>\n          </a>\n        </li>\n        <li>\n          <a routerLink=\"/create\">\n            <mat-icon class=\"icon\">person_add</mat-icon>\n            <span class=\"label\">New Contact</span>\n          </a>\n        </li>\n<!--         <li>\n          <a routerLink=\"/upload\">\n            <mat-icon class=\"icon upload\">group_add</mat-icon>\n            <span class=\"label\">Upload contacts</span>\n          </a>\n        </li> -->\n\n        <li>\n          <a routerLink=\"/\" (click)=\"logout()\">\n            <mat-icon class=\"icon logout\">exit_to_app</mat-icon>\n            <span class=\"label\">LogOut</span>\n          </a>\n        </li>\n        <li>\n\n         <!--  <span>Welcome!</span>\n           {{authService.decodedToken?.unique_name|titlecase}} -->\n\n\n        </li>\n      </ul>\n    </div>\n    <div class=\"loginForm\">\n      <form *ngIf=\"!loggedIn()\" #loginForm=\"ngForm\" (ngSubmit)=\"login()\">\n        <input matInput class=\"form-control mr-sm-2\" type=\"email\" name=\"email\" placeholder=\"Email\" required\n          [(ngModel)]=\"model.email\">\n        <input matInput class=\"form-control mr-sm-2\" type=\"password\" name=\"password\" placeholder=\"Password\" required\n          [(ngModel)]=\"model.password\">\n        <button [disabled]=\"!loginForm.valid\" mat-raised-button color=\"basic\" type=\"submit\">Login</button>\n      </form>\n    </div>\n\n\n  </mat-toolbar>\n\n<mat-sidenav-container autosize>\n\n  <mat-sidenav #sidenav mode=\"side\" autosize>\n    <a mat-list-item routerLink=\"/contacts\" routerLinkActive=\"mat-accent\">\n      <mat-icon class=\"icon\">group</mat-icon>\n      <span class=\"label\">All contacts</span>\n    </a>\n\n    <a mat-list-item routerLink=\"/create\" routerLinkActive=\"mat-accent\">\n      <mat-icon class=\"icon\">person_add</mat-icon>\n      <span class=\"label\">New Contact</span>\n    </a>\n\n<!--     <a mat-list-item routerLink=\"/upload\" routerLinkActive=\"mat-accent\">\n      <mat-icon class=\"icon\">group_add</mat-icon>\n      <span class=\"label\">Upload contacts</span>\n    </a> -->\n\n    <a mat-list-item (click)=\"logout()\" routerLink=\"/\" routerLinkActive=\"mat-accent\">\n      <mat-icon class=\"icon\">exit_to_app</mat-icon>\n      <span class=\"label\">LogOut</span>\n    </a>\n  </mat-sidenav>\n\n\n\n\n  <mat-sidenav-content>\n\n      <router-outlet></router-outlet>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n"

/***/ }),

/***/ "./src/node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!************************************************************************!*\
  !*** ./src/node_modules/raw-loader!./src/app/home/home.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- home page html -->\n  <div *ngIf=\"!loggedIn()\" class=\"container mt-5\">\n    <div *ngIf=\"!registerMode\" class=\"text-center\">\n        <h1>Telephone book</h1>\n        <p class=\"lead\">Keep your contacts in one place!</p>\n        <div class=\"text-center\">\n          <button *ngIf=\"!isRegistered\" mat-raised-button class = \"submit\" color=\"primary\"  (click)=\"registerToggle()\">Register</button>\n\n        </div>\n      </div>\n\n      <div *ngIf=\"registerMode\" class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-4\">\n            <app-signup\n            (cancelRegister)=\"cancelRegisterMode($event)\"\n            (markAsRegistered)=\"markAsRegistered($event)\"\n            ></app-signup>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"loggedIn()\" class=\"container mt-5\">\n      <div *ngIf=\"!registerMode\" class=\"text-center\">\n          <h1 >My telephone book</h1>\n        </div>\n      </div>\n\n      <div *ngIf=\"isRegistered\" class=\"container mt-5\">\n            <h4>You are registered successfully, please now login</h4>\n        </div>\n"

/***/ }),

/***/ "./src/node_modules/raw-loader/index.js!./src/app/signup/signup.component.html":
/*!****************************************************************************!*\
  !*** ./src/node_modules/raw-loader!./src/app/signup/signup.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- register page html -->\n<div id=\"login-box\">\n  <div>\n      <mat-toolbar color =\"primary\" class=\"top\">\n          <h1>REGISTER NOW</h1>\n        </mat-toolbar >\n  </div>\n    <div class=\"left\">\n\n\n<mat-card-content>\n\n  <form #registerForm=\"ngForm\" (ngSubmit)=\"signUp()\">\n     <mat-form-field class=\"full-width\">\n            <mat-label>Email</mat-label>\n            <input matInput placeholder=\"Enter your email\" required\n            [formControl]=\"email\"\n            [(ngModel)]=\"model.email\">\n            <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\n          </mat-form-field>\n\n          <mat-form-field class=\"full-width\" >\n                    <mat-label>Password</mat-label>\n                    <input matInput name=\"password\" placeholder=\"Enter your password\" required\n                    [formControl]=\"password\"\n                    [type]=\"hide ? 'password' : 'text'\"\n                    [(ngModel)]=\"model.password\">\n                    <mat-error *ngIf=\"password.invalid\">{{getPasswordErrorMessage()}}</mat-error>\n\n                    <button mat-icon-button color=\"primary\" matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                        <mat-icon>{{hide? 'visibility_off' : 'visibility'}}</mat-icon>\n                        </button>\n              </mat-form-field>\n\n         <button mat-raised-button class = \"submit\" color=\"primary\" type=\"submit\">Register</button>\n         <button mat-raised-button class = \"cancel\" color=\"warn\" type=\"button\" (click)=\"cancel()\">Cancel</button>\n\n  </form>\n</mat-card-content>\n</div>\n\n<div class=\"right\">\n    <mat-card-content>\n    <span class=\"loginwith\">sign in with<br />social network</span>\n    <button mat-raised-button class=\"social-signin facebook\" (click)=\"facebookSignIn('Facebook')\">Log in with facebook</button>\n<!--     <button mat-raised-button class=\"social-signin twitter\">Log in with Twitter</button>\n    <button mat-raised-button class=\"social-signin google\">Log in with Google+</button> -->\n  </mat-card-content>\n</div>\n\n<div class=\"or\">OR</div>\n</div>\n"

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/olga/Documents/GitHub/TelephoneBook/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map