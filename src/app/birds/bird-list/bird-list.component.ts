import { Component, OnInit } from '@angular/core';

import { Bird } from '../shared/bird.model'
import { BirdService } from '../shared/bird.service'

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.scss']
})
export class BirdListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];

  birds: Bird[];

  constructor(private birdService: BirdService) { }

  ngOnInit(): void {
    this.getBirds();
  }

  getBirds(): void {
    this.birdService.getHeroes()
      .subscribe(birds => this.birds = birds);
  }

}
