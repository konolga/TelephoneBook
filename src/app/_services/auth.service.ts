import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.apiUrl + '/auth';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  regStatus = false;

constructor(private http: HttpClient, private router: Router) { }
login(model: any) {
    return this.http.post(this.baseUrl + '/login', model)
    .pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('titlecase', user.email);
          this.router.navigate(['/contacts']);
        }
      })
    );
  }
  signup(model: any) {
    return this.http.post(this.baseUrl + '/signup', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }


}
