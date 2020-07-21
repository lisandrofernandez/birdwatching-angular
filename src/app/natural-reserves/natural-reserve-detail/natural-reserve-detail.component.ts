import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ComponentErrorHandler } from '../../common/component-error-handler';
import { MessageService } from '../../common/message/message.service';
import { ServiceError } from '../../common/service-error';
import { NaturalReserveDetails } from '../shared/natural-reserve-details.model';
import { NaturalReserveService } from '../shared/natural-reserve.service';
import { Region } from '../../regions/shared/region.model';
import { RegionService } from '../../regions/shared/region.service';

@Component({
  selector: 'app-natural-reserve-detail',
  templateUrl: './natural-reserve-detail.component.html',
  styleUrls: ['./natural-reserve-detail.component.scss']
})
export class NaturalReserveDetailComponent extends ComponentErrorHandler implements OnInit {
  naturalReserve: NaturalReserveDetails;

  regions: Region[];

  constructor(
    private route: ActivatedRoute,
    messageService: MessageService,
    private naturalReserveService: NaturalReserveService,
    private regionService: RegionService,
  ) {
    super(messageService);
  }

  ngOnInit(): void {
    this.getRegions();
    this.getNaturalReserve();
  }

  onSubmit(): void {
    this.updateNaturalReserve();
  }

  private getRegions(): void {
    this.regionService.getRegions()
      .subscribe(regions => this.regions = regions);
  }

  private getNaturalReserve(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.naturalReserveService.getNaturalReserveDetails(id)
      .subscribe(
        naturalReserve => this.naturalReserve = naturalReserve,
        //this.handleError
        (error: ServiceError) => this.handleError(error)
      )
  }

  private updateNaturalReserve(): void {
    this.naturalReserveService.updateNaturalReserve(this.naturalReserve)
      .subscribe(
        naturalReserve => {
          this.naturalReserve = naturalReserve
          this.messageService.showQuickMessage('Natural reserve saved');
        },
        //this.handleError
        (error: ServiceError) => { this.handleError(error); }
      );
  }

}
