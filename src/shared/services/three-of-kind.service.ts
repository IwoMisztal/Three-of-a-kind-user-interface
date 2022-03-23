import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ThreeOfKindService {

  BASE_URL = "/ThreeOfKind"

  public processedNumbers = new BehaviorSubject<number[]>([]);

  constructor(private client: HttpClient) { }

  public processNumbers(numbers: number[]): Observable<any> {
    return this.client.post(`${this.BASE_URL}`, numbers).pipe(
      tap((numbers: any) => this.processedNumbers.next(numbers))
    );
  }

}
