import { Component, OnInit } from '@angular/core';
import { ThreeOfKindService } from 'src/shared/services/three-of-kind.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public numbers = [...Array(9).keys()].map(q => q += 1);
  public itemsPerRow = 3;

  constructor(public threeOfKindService: ThreeOfKindService) { }

  ngOnInit(): void {
  }

}
