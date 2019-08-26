import { Component, OnInit, PLATFORM_ID, Injector, NgZone, APP_ID } from '@angular/core';
import { TransferState, makeStateKey, Title, Meta } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CookieService } from 'ngx-cookie-service';
import * as moment from 'moment';

//Social Login and sign out
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";

// CONSTANTS
import swal from 'sweetalert2'
import * as jQuery from 'jquery';
declare var jquery: any;
declare var $: any;

@Component({
    selector: 'parent-comp',
    template: ``,
    providers: []
})

export class BaseComponent {

    constructor(injector: Injector) {
        this.router = injector.get(Router)
        this.platformId = injector.get(PLATFORM_ID)
        this.appId = injector.get(APP_ID)
        this.http = injector.get(HttpClient)
        this.titleService = injector.get(Title)
        this.metaService = injector.get(Meta)
        this.activatedRoute = injector.get(ActivatedRoute)
        this.sanitize = injector.get(DomSanitizer);
        this._snackBar = injector.get(MatSnackBar);
        this.cookieService = injector.get(CookieService);
        this.authService = injector.get(AuthService);
        //console.log('Your current Environment is :', environment)
    }
    public _snackBar: MatSnackBar;
    public cookieService: CookieService;
    public sanitize: DomSanitizer
    public activatedRoute: ActivatedRoute;
    public swal = swal;
    public titleService: Title
    public metaService: Meta
    public platformId: any;
    public appId: any;
    public http: any;
    public router: Router;
    public baseUrl;
    public $ = jQuery;
    public moment = moment;
    public authService: AuthService;

    // snackbar variables
    autoHide: number = 3000; // 3 seconds
    horizontalPosition: MatSnackBarHorizontalPosition = 'center';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    // *************************************************************//
    //@Purpose : To check server or browser
    //*************************************************************//
    isBrowser() {
        if (isPlatformBrowser(this.platformId)) {
            return true;
        } else {
            return false;
        }
    }

    // *************************************************************//
    //@Purpose : To check server or browser
    //*************************************************************//
    public showSnackbar(type, message) {
        let snackbarConfig = new MatSnackBarConfig();
        snackbarConfig.verticalPosition = this.verticalPosition;
        snackbarConfig.horizontalPosition = this.horizontalPosition;
        snackbarConfig.duration = this.autoHide;
        if (type == "S") {
            snackbarConfig.panelClass = ["success-snackbar"];
        }
        else if (type == "E") {
            snackbarConfig.panelClass = ["error-snackbar"];
        }
        else if (type == "W") {
            snackbarConfig.panelClass = ["warning-snackbar"];
        }
        else if (type == "I") {
            snackbarConfig.panelClass = ["info-snackbar"];
        }
        else {
            snackbarConfig.panelClass = ["primary-snackbar"];
        }
        console.log("snackconfig", snackbarConfig);
        this._snackBar.open(message, "close", snackbarConfig);
    }

    // *************************************************************//
    //@Purpose : We can use following function to use localstorage
    //*************************************************************//
    setToken(key, value) {
        if (isPlatformBrowser(this.platformId)) {
            window.localStorage.setItem(key, value);
        }
    }
    getToken(key) {
        if (isPlatformBrowser(this.platformId)) {
            return window.localStorage.getItem(key);
        }
    }
    removeToken(key) {
        if (isPlatformBrowser(this.platformId)) {
            window.localStorage.removeItem(key);
        }
    }
    clearToken() {
        if (isPlatformBrowser(this.platformId)) {
            window.localStorage.clear()
        }
    }

    // se cookies for remember me
    setCookies(key, value) {
        var keyBtoa = window.btoa(value);
        this.cookieService.set(key, keyBtoa);
    }

    getCookies(key) {
        var value = this.cookieService.get(key);
        var atobValue = window.atob(value);
        return atobValue;
    }

    removeCookies(key) {
        this.cookieService.delete(key);
    }

    public socialSignInWithGoogle() {
        return new Promise(async resolve => {
            var response = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID)
            console.log("response", response);
            return resolve(response);
        });
    }

    public socialSignInWithFB() {
        return new Promise(async resolve => {
            var response = await this.authService.signIn(FacebookLoginProvider.PROVIDER_ID)
            console.log("response", response);
            return response;
        })
    }

    public socialSignOut() {
        return new Promise(async resolve => {
            var response = await this.authService.signOut()
            console.log("response", response);
            return true;
        })
    }
}
