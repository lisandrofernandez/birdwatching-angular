import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NaturalReserveDetails } from '../shared/natural-reserve-details.model';
import { NaturalReserveService } from '../shared/natural-reserve.service';
import { Region } from '../../regions/shared/region.model';
import { RegionService } from '../../regions/shared/region.service';

@Component({
  selector: 'app-natural-reserve-detail',
  templateUrl: './natural-reserve-detail.component.html',
  styleUrls: ['./natural-reserve-detail.component.scss']
})
export class NaturalReserveDetailComponent implements OnInit {
  naturalReserve: NaturalReserveDetails;

  regions: Region[];

  constructor(
    private route: ActivatedRoute,
    private naturalReserveService: NaturalReserveService,
    private regionService: RegionService) { }

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
      .subscribe(naturalReserve => this.naturalReserve = naturalReserve)
  }

  private updateNaturalReserve(): void {
    this.naturalReserveService.updateNaturalReserve(this.naturalReserve)
      .subscribe(naturalReserve => this.naturalReserve = naturalReserve);
  }

}
