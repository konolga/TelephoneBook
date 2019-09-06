import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  registerMode = false;
  isRegistered = false;
  values: any;


  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }



  registerToggle() {
    this.registerMode = true;
  }


  cancelRegisterMode(registerMode: boolean){
    this.registerMode = false;
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
