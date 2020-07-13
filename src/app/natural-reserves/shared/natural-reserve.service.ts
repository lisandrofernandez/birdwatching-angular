import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { NaturalReserve } from './natural-reserve.model';

@Injectable({ providedIn: 'root' })
export class NaturalReserveService {

  private reservesUrl = 'http://localhost:8080/api/v1/reserves';

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

}
