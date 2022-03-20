import { Component, OnInit } from '@angular/core';
import { NumberTableService } from 'src/shared/services/number-table.service';

@Component({
  selector: 'app-number-table',
  templateUrl: './number-table.component.html',
  styleUrls: ['./number-table.component.scss']
})
export class NumberTableComponent implements OnInit {

  public numbers = [...Array(9).keys()].map(q => q += 1);
  public itemsPerRow = 3;

  constructor(public numbersTableService: NumberTableService) { }

  ngOnInit(): void {
  }

}
