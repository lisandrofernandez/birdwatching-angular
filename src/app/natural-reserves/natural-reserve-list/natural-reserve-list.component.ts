import { Component, OnInit } from '@angular/core';

import { NaturalReserve } from '../shared/natural-reserve.model'
import { NaturalReserveService } from '../shared/natural-reserve.service'

@Component({
  selector: 'app-natural-reserve-list',
  templateUrl: './natural-reserve-list.component.html',
  styleUrls: ['./natural-reserve-list.component.scss']
})
export class NaturalReserveListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'details'];

  naturalReserves: NaturalReserve[];

  constructor(private naturalReserveService: NaturalReserveService) { }

  ngOnInit(): void {
    this.getNaturalReserves();
  }

  getNaturalReserves(): void {
    this.naturalReserveService.getNaturalReserves()
      .subscribe(naturalReserves => this.naturalReserves = naturalReserves);
  }

}
