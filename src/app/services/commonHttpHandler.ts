import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'https://randomuser.me/';

  constructor(private http: HttpClient) {}

  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  // HttpClient API get() method => Fetch User Info
  getUserInfo(): Observable<any> {
    return this.http
      .get<any>(this.apiURL)
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Images List
  getPictures(): Observable<any> {
    return this.http
      .get<any>('https://picsum.photos/v2/list?page=2&limit=100')
      .pipe(retry(1), catchError(this.handleError));
  }

  // HttpClient API get() method => Fetch Feed  List
  getFeedList(): Observable<any> {
    return this.http
      .get<any>(this.apiURL + '/anys/')
      .pipe(retry(1), catchError(this.handleError));
  }

  // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
