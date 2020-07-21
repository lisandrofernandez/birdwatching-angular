import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NaturalReserve } from './natural-reserve.model';
import { NaturalReserveDetails } from './natural-reserve-details.model';
import { ServiceErrorHandler } from '../../common/service-error-handler';

@Injectable({ providedIn: 'root' })
export class NaturalReserveService extends ServiceErrorHandler {

  private reservesUrl = 'http://localhost:8080/api/v1/reserves';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    super();
  }

  /** GET natural reserves from the server */
  getNaturalReserves(): Observable<NaturalReserve[]> {
    return this.http.get<NaturalReserve[]>(this.reservesUrl).pipe(
      catchError(this.handleError)
    );
  }

  /** GET a natural reserve from the server */
  getNaturalReserveDetails(id: number): Observable<NaturalReserveDetails> {
    const url = `${this.reservesUrl}/${id}`;
    return this.http.get<NaturalReserveDetails>(url).pipe(
      catchError(this.handleError)
    );
  }

  /** PUT: update a natural reserve on the server */
  updateNaturalReserve(naturalReserve: NaturalReserveDetails): Observable<NaturalReserveDetails> {
    const url = `${this.reservesUrl}/${naturalReserve.id}`;
    return this.http.put<NaturalReserveDetails>(url, naturalReserve, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

}
