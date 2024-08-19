import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-layout-blog',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe],
  templateUrl: './layout-blog.component.html',
  styleUrl: './layout-blog.component.css',
})
export class LayoutBlogComponent {
  title$!: Observable<string>;
  router = inject(Router);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.router.events.subscribe((res) => {
      this.title$ = this.route.firstChild?.title as Observable<string>;
    });
  }
}
