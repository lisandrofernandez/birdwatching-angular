import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NaturalReserve } from './natural-reserve.model';
import { NaturalReserveDetails } from './natural-reserve-details.model';
import { ApiError } from '../../common/api-error';
import { ServiceError } from '../../common/service-error';

@Injectable({ providedIn: 'root' })
export class NaturalReserveService {

  private reservesUrl = 'http://localhost:8080/api/v1/reserves';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  /** GET natural reserves from the server */
  getNaturalReserves(): Observable<NaturalReserve[]> {
    return this.http.get<NaturalReserve[]>(this.reservesUrl).pipe(
      catchError(error => {
        // TODO: show a message with the error
        console.error(error);
        return of([]);
      })
    );
  }

  /** GET a natural reserve from the server */
  getNaturalReserveDetails(id: number): Observable<NaturalReserveDetails> {
    const url = `${this.reservesUrl}/${id}`;
    return this.http.get<NaturalReserveDetails>(url).pipe(
      catchError(error => {
        // TODO: show a message with the error
        console.error(error);
        return of(null);
      })
    );
  }

  /** PUT: update a natural reserve on the server */
  updateNaturalReserve(naturalReserve: NaturalReserveDetails): Observable<NaturalReserveDetails> {
    const url = `${this.reservesUrl}/${naturalReserve.id}`;
    return this.http.put<NaturalReserveDetails>(url, naturalReserve, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      return throwError(new ServiceError(
        'Unexpected error', false, ['Unexpected error'])
      );
    } else {
      switch (error.status) {
        case 400: { // Bad Request
          let apiError = error.error as ApiError;
          return throwError(new ServiceError(
            apiError.message, true, apiError.errors)
          );
        }
        case 404: { // Not found
          return throwError(new ServiceError(
            'Not found', false, ['Not found'])
          );
        }
        case 500: // Internal Server Error
        default:
          return throwError(new ServiceError(
            'Unexpected error', false, ['Unexpected error'])
          );
      }
    }
  }

}
