import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; // 1.import observable

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
// define variables
  orderStatus1: any; // observer1
  orderStatus2: any; // observer1
  data: Observable<any>; // observable.

  constructor() { }

  ngOnInit(): void {

    this.data = new Observable(observer => {
      setTimeout(() => { observer.next('In Progress'); }, 4000);
      setTimeout(() => { observer.next('Processing'); }, 8000);
      setTimeout(() => { observer.next('Completed'); }, 12000);
      setTimeout(() => { observer.error(); }, 13000); // give error if any error exist
      setTimeout(() => { observer.complete(); }, 14000); // unscrbe using complte()
      setTimeout(() => { observer.next('Refund??'); }, 16000); // this wont work becuase we unscribe it
    });

    this.data.subscribe(val => { this.orderStatus1 = val; });
    this.data.subscribe(val => { this.orderStatus2 = val; });
  }

}
