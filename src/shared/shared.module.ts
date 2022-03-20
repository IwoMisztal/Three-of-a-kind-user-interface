import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RangePipe } from './pipes/range.pipe';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    RangePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    RangePipe,
  ]
})
export class SharedModule { }
