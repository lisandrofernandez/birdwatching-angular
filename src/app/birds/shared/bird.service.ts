import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

import { ServiceErrorHandler } from '../../common/service-error-handler';
import { Bird } from './bird.model';

@Injectable({ providedIn: 'root' })
export class BirdService extends ServiceErrorHandler {
  private birdsUrl = 'http://localhost:8080/api/v1/birds';
  private birdsCache$: Observable<Bird[]>;

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * GET birds from the server
   *
   * Caches the response for further use.
   */
  getBirds(): Observable<Bird[]> {
    if (!this.birdsCache$) {
      this.birdsCache$ = this.http.get<Bird[]>(this.birdsUrl).pipe(
        shareReplay(1),
        catchError(this.handleError)
      );
    }
    return this.birdsCache$;
  }

}
