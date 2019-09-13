import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {map} from 'rxjs/operators';




@Injectable({ providedIn: 'root' })
export class FbAuthService {
  baseUrl = environment.apiUrl + '/auth';

constructor(private http: HttpClient, private router: Router) { }


socialLogin(data: any) {

  return this.http.post(this.baseUrl + '/social-login', data)
   .pipe(
    map((response: any) => {
     const user = response;
     if (user) {
        localStorage.setItem('token', user.token);
        localStorage.setItem('email', user.email);
        this.router.navigate(['/contacts']);
      }
    })
  );
}

}
