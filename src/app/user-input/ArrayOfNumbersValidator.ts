import { AbstractControl, ValidatorFn } from "@angular/forms";

export function numberArrayFormatValidator (): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null =>
     new RegExp('^[0-9][0-9,/,]').test(control.value) === true ? null : {'wrongFormat': control.value};
  }