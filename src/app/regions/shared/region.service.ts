import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';

import { ServiceErrorHandler } from '../../common/service-error-handler';
import { Region } from './region.model';

@Injectable({ providedIn: 'root' })
export class RegionService extends ServiceErrorHandler {
  private regionsUrl = 'http://localhost:8080/api/v1/regions';
  private regionsCache$: Observable<Region[]>;

  constructor(private http: HttpClient) {
    super();
  }

  /**
   * GET regions from the server
   *
   * Caches the response for further use.
   */
  getRegions(): Observable<Region[]> {
    if (!this.regionsCache$) {
      this.regionsCache$ = this.http.get<Region[]>(this.regionsUrl).pipe(
        shareReplay(1),
        catchError(this.handleError)
      );
    }
    return this.regionsCache$;
  }

}
