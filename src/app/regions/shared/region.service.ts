import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Region } from './region.model';

@Injectable({ providedIn: 'root' })
export class RegionService {
  private regionsUrl = 'http://localhost:8080/api/v1/regions';

  constructor(private http: HttpClient) { }

  /** GET regions from the server */
  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.regionsUrl).pipe(
      catchError(error => {
        // TODO: show a message with the error
        console.error(error);
        return of([]);
      })
    );
  }

}
