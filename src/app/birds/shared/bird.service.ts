import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ServiceErrorHandler } from '../../common/service-error-handler';
import { Bird } from './bird.model';

@Injectable({ providedIn: 'root' })
export class BirdService extends ServiceErrorHandler {
  private birdsUrl = 'http://localhost:8080/api/v1/birds';

  constructor(private http: HttpClient) {
    super();
  }

  /** GET birds from the server */
  getHeroes(): Observable<Bird[]> {
    return this.http.get<Bird[]>(this.birdsUrl).pipe(
      catchError(this.handleError)
    );
  }

}
