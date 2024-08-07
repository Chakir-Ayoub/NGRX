import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TodosComponent } from './pages/todos/todos.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { GithubComponent } from './pages/github/github.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    TodosComponent,
    CoursesComponent,
    GithubComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng18-first-project';
}
