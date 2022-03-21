import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { NumberTableService } from 'src/shared/services/number-table.service';
import { numberArrayFormatValidator } from './ArrayOfNumbersValidator';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {

  arrayOfNumbersRegex = new RegExp('^[-,0-9]+$');

  numberInput = new FormControl(null, Validators.pattern(this.arrayOfNumbersRegex));

  constructor(private numberTableService: NumberTableService) { }

  ngOnInit(): void {
  }

  processInput() {
    this.numberTableService.processNumbers(this.numberInput.value.split(',')).pipe(
      catchError(err => of(this.numberInput.setErrors({'format': err.error}))),
    ).subscribe()
  }

}
