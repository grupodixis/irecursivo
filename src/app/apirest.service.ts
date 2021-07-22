import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApirestService {
  hd = { Authorization: 'bearer ' + localStorage.getItem('token') };
  headers = new HttpHeaders(this.hd);

  constructor(private _http: HttpClient, private _router: Router) {}

  get(resource: string) {
    return this._http
      .get<any>(environment.apiHost + resource, { headers: this.headers })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }
  post(resource: string, body: any) {
    
     
    return this._http
      .post(environment.apiHost + resource, body, { headers: this.headers })
      .pipe(
        catchError((err) => {
          return throwError(err);
        })
      );
  }

  routeOut(err) {
    this._router.navigate(['/home']);
    return err;
  }
}
