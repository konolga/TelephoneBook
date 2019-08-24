import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import {NgForm} from '@angular/forms';
import {FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
  signUp() {
   this.authService.signup(this.model).subscribe(() => {
     this.alertify.success('logged in successfully');

    }, error => {
      this.alertify.error('error');
    }, () => {
      this.cancel();
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }



}
