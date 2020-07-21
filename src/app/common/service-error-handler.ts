import { HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

import { ApiError } from './api-error';
import { ServiceError } from './service-error';

export abstract class ServiceErrorHandler {

  protected handleError(error: HttpErrorResponse): Observable<never> {
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
          let apiError = error.error as ApiError;
          return throwError(new ServiceError(
            apiError.message, false, apiError.errors)
          );
        }
        default:
          return throwError(new ServiceError(
            'Unexpected error', false, ['Unexpected error'])
          );
      }
    }
  }

}
