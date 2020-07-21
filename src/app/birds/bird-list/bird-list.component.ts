import { Component, OnInit } from '@angular/core';

import { ComponentErrorHandler } from '../../common/component-error-handler';
import { MessageService } from '../../common/message/message.service';
import { ServiceError } from '../../common/service-error';
import { Bird } from '../shared/bird.model'
import { BirdService } from '../shared/bird.service'

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.scss']
})
export class BirdListComponent extends ComponentErrorHandler implements OnInit {
  displayedColumns: string[] = ['id', 'name'];

  birds: Bird[];

  constructor(
    messageService: MessageService,
    private birdService: BirdService) {
      super(messageService);
    }

  ngOnInit(): void {
    this.getBirds();
  }

  getBirds(): void {
    this.birdService.getHeroes()
      .subscribe(
        birds => this.birds = birds,
        //this.handleError
        (error: ServiceError) => this.handleError(error)
      );
  }

}
