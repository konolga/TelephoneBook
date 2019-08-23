import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // @Output() featureSelected = new EventEmitter<string>();
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) {}
  ngOnInit() {}

/*     onSelect(feature: string) {
    this.featureSelected.emit(feature);
  } */

  login() {
    this.authService.login(this.model).subscribe(next => {
        this.alertify.success('logged in successfully');
      },
      error => {
        this.alertify.error(error);
      }, () => {
        this.router.navigate(['/contacts']);
      });
  }

  loggedIn() {
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('logged out');
    this.router.navigate(['/home']);
  }
}


