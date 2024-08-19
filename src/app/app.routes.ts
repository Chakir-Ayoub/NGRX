import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { GithubComponent } from './pages/github/github.component';
import { TodosComponent } from './pages/todos/todos.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LayoutBlogComponent } from './pages/blog/layout-blog/layout-blog.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: (infoUrl) => {
      console.log(infoUrl);
      return '/home';
    },
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'elearning',
    loadComponent: () =>
      import('../app/pages/courses/courses.component').then(
        (c) => c.CoursesComponent
      ),
  },
  {
    path: 'users',
    component: GithubComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'counter',
    component: CounterPageComponent,
  },
  {
    path: 'blog',
    component: LayoutBlogComponent,
    loadChildren: () =>
      import('./pages/blog/blog.routes').then((m) => m.routes),
  },

  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
