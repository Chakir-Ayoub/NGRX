import { Component, inject } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { AsyncPipe } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  counterService = inject(CounterService);
}
