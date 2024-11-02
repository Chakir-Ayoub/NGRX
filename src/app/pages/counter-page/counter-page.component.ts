import { Component, computed, effect, inject, signal } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { AsyncPipe } from '@angular/common';
import { Store } from '@ngrx/store';
import { selectCount } from '../../store/counter/counter.selectors';
import {Observable} from 'rxjs';
import { increment,decrement, reset } from '../../store/counter/counter.actions';
@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  counterService = inject(CounterService);
  store=inject(Store);

  mycount!:Observable<number>;

  ngOnInit() {
   this.mycount= this.store.select(selectCount);
  }

  increment(){
    this.store.dispatch(increment());
  }

  decrement(){
    this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset());
  }
}
