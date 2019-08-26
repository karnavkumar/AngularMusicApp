import { Component, Input, OnInit, ViewEncapsulation, Inject, Injector } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaseComponent } from '../../common/commonComponents';
import { ForgotPasswordDialog } from './forgot-password/forgot-password-dialog';
import { RegisterDialog } from './register/register-dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})

@Component({
  selector: 'music-album-list',
  templateUrl: '../../components/album-list/album-list.component.html',
  styleUrls: ['../../components/album-list/album-list.component.scss']
})

@Component({
  selector: 'location-map',
  templateUrl: '../../components/location-map/location-map.component.html',
  styleUrls: ['../../components/location-map/location-map.component.scss']
})

export class HomeComponent extends BaseComponent implements OnInit {
  loginForm: FormGroup;
  contactForm: FormGroup;
  passwordHide = true;
  breakpoint = 3;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(
    inj: Injector,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    super(inj);
  }

  ngOnInit() {
    this.createForm();
    this.breakpoint = 3;
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: []
    });
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      reason: ['', [Validators.required]],
      description: [''],
    });
    this.setFormByCookies();
  }

  setFormByCookies() {
    let rememberMeCookieValue = this.getCookies('rememberMe');
    if (rememberMeCookieValue) {
      this.loginForm.controls['rememberMe'].setValue(rememberMeCookieValue);
      let emailCookieValue = this.getCookies('email');
      if (emailCookieValue != "" && emailCookieValue != undefined) {
        this.loginForm.controls['email'].setValue(emailCookieValue);
      }
      let passwordCookieValue = this.getCookies('password');
      if (passwordCookieValue != "" && passwordCookieValue != undefined) {
        this.loginForm.controls['password'].setValue(passwordCookieValue);
      }
    }
  }

  setCookiesOnSubmit(email, password, rememberMe) {
    if (rememberMe) {
      this.setCookies("email", email);
      this.setCookies("password", password);
      this.setCookies("rememberMe", rememberMe);
    } else {
      this.removeCookies("email");
      this.removeCookies("password");
      this.removeCookies("rememberMe");
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      var email = this.loginForm.controls['email'].value;
      var password = this.loginForm.controls['password'].value;
      var rememberMe = this.loginForm.controls['rememberMe'].value;
      this.setCookiesOnSubmit(email, password, rememberMe);
      this.showSnackbar("S", "Login successfully");
    } else {
      this.showSnackbar("E", "Something went wrong!");
    }
  }

  openForgotPassword() {
    console.log("forgot password page");
    const dialogRef = this.dialog.open(ForgotPasswordDialog, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openRegister() {
    console.log("Register page");
    const dialogRef = this.dialog.open(RegisterDialog, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onResize(event) {
    console.log("event.target.innerWidth", event.target.innerWidth);
    this.breakpoint = 3
    if (event.target.innerWidth <= 1000 && event.target.innerWidth >= 701) {
      this.breakpoint = 2;
    } else if (event.target.innerWidth <= 700) {
      this.breakpoint = 1;
    }
  }
  async signInWithGoogle() {
    var response = await this.socialSignInWithGoogle();
    console.log("response", response);
  }

  async signInWithFB() {
    var response = await this.socialSignInWithFB();
    console.log("response", response);
  }

  async signOut() {
    var response = await this.socialSignOut();
    console.log("response", response);
  }
}
