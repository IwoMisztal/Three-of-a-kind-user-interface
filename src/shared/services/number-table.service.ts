import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, of, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class NumberTableService {

  BASE_URL = "/NumberTable"

  public processedNumbers = new BehaviorSubject<number[]>([]);

  constructor(private client: HttpClient) { }

  public processNumbers(numbers: number[]): Observable<any> {
    return this.client.post(`${this.BASE_URL}/proccessNumbers`, numbers).pipe(
      tap((numbers: any) => this.processedNumbers.next(numbers))
    );
  }

}
