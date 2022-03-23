import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { catchError, of } from 'rxjs';
import { ThreeOfKindService } from 'src/shared/services/three-of-kind.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {

  arrayOfNumbersRegex = new RegExp('^[-,0-9]+$');

  numberInput = new FormControl(null, Validators.pattern(this.arrayOfNumbersRegex));

  constructor(private threeOfKindService: ThreeOfKindService) { }

  ngOnInit(): void {
  }

  processInput() {
    this.threeOfKindService.processNumbers(this.numberInput.value.split(',')).pipe(
      catchError(err => of(this.numberInput.setErrors({'format': err.error}))),
    ).subscribe()
  }

}
