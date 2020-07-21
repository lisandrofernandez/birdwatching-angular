export class ServiceError extends Error {
  readonly recoverable: boolean = false;
  readonly errors: string[] = [];
  
  constructor(message?: string, recoverable?: boolean, errors?: string[]) {
    super(message);
    Object.setPrototypeOf(this, ServiceError.prototype);
    this.name = ServiceError.name;

    if (recoverable) this.recoverable = recoverable;
    if (errors) this.errors = errors;
  }
}
