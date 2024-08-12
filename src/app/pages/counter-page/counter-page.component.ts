import { Component, computed, effect, inject, signal } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  counterService = inject(CounterService);

  currentCount: number = 0;

  ngOnInit() {
    this.counterService.getCout().subscribe((res) => (this.currentCount = res));
  }
}
