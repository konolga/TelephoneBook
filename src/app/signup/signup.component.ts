import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService} from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { FormControl, Validators } from '@angular/forms';
import { AuthService as SocialAuthService, SocialLoginModule, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { FbAuthService} from '../_services/fbAuth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  @Output() markAsRegistered = new EventEmitter();
  model: any = {};
  hide = true;
  registered = false;

user: SocialUser;
loggedIn: boolean;

  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private socialAuthService: SocialAuthService,
              private fbAuthService: FbAuthService,
              private router: Router) { }

  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
   });
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  signUp() {
   this.authService.signup(this.model).subscribe(() => {
    this.alertify.success('signed up successfully');
    this.markAsRegistered.emit(true);
    }, error => {
      this.alertify.error('error');
      console.log(error);
    }, () => {
      this.cancel();
    });
  }

facebookSignIn() {
this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(userData => {
  this.fbAuthService.socialLogin(userData).subscribe(response=>{
    this.markAsRegistered.emit(true);
    this.alertify.success('signed up successfully');
    this.cancel();
  }, error => {
    this.alertify.error('error');
    console.log(error);
}
  );
});
}



  cancel() {
    this.cancelRegister.emit(false);
  }



}
