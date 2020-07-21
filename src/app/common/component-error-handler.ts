import { MessageService } from './message/message.service';
import { ServiceError } from './service-error';

export abstract class ComponentErrorHandler {
  constructor(protected messageService: MessageService) {}

  protected handleError(error: ServiceError): void {
    if (!error.recoverable) {
      console.error(error.message)
    }
    this.messageService.showError(error.errors);
  }
}
