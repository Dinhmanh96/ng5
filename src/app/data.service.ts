import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

  private list = new BehaviorSubject<any>(['Dinhmanh96@gmail.com', 'Dinhmanh770@gmail.com']);
  lis = this.list.asObservable();
  constructor() { }
  changeList(lis) {
    this.list.next(lis);
  }
}
