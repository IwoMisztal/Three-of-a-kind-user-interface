import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { NumberTableService } from 'src/shared/services/number-table.service';
import { numberArrayFormatValidator } from './ArrayOfNumbersValidator';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {

  // arrayOfNumbersRegex = new RegExp('^\d(?:[,]\d+)?$');
  arrayOfNumbersRegex = new RegExp('^[-,0-9]+$');

  numberInput = new FormControl(null, Validators.pattern(this.arrayOfNumbersRegex));

  constructor(private numberTableService: NumberTableService) { }

  ngOnInit(): void {
    this.numberInput.valueChanges
      .subscribe(q => this.numberInput.valid && this.numberTableService.processNumbers(q.split(',').map((z: string) => +z)));
  }

}
