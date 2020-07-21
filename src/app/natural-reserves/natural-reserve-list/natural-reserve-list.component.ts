import { Component, OnInit } from '@angular/core';

import { ComponentErrorHandler } from '../../common/component-error-handler';
import { MessageService } from '../../common/message/message.service';
import { ServiceError } from '../../common/service-error';
import { NaturalReserve } from '../shared/natural-reserve.model'
import { NaturalReserveService } from '../shared/natural-reserve.service'

@Component({
  selector: 'app-natural-reserve-list',
  templateUrl: './natural-reserve-list.component.html',
  styleUrls: ['./natural-reserve-list.component.scss']
})
export class NaturalReserveListComponent extends ComponentErrorHandler implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'details'];

  naturalReserves: NaturalReserve[];

  constructor(
    messageService: MessageService,
    private naturalReserveService: NaturalReserveService
  ) {
    super(messageService);
  }

  ngOnInit(): void {
    this.getNaturalReserves();
  }

  getNaturalReserves(): void {
    this.naturalReserveService.getNaturalReserves()
      .subscribe(
        naturalReserves => this.naturalReserves = naturalReserves,
        //this.handleError
        (error: ServiceError) => this.handleError(error)
      );
  }

}
