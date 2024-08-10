import { Component, inject } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { User } from '../../models/user';
import { ListGithubComponent } from '../../components/github/list-github/list-github.component';
import { FormsModule } from '@angular/forms';
import { SkeletonCardComponent } from '../../components/shared/skeleton-card/skeleton-card.component';
import { LoadingComponent } from '../../components/shared/loading/loading.component';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [
    ListGithubComponent,
    FormsModule,
    SkeletonCardComponent,
    LoadingComponent,
  ],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
})
export class GithubComponent {
  isVisible: boolean = false;
  search: string = '';
  users: User[] = [];

  // constructor(private githubApiService: GithubApiService) {
  //   console.log('consctructor');
  // }

  githubApiService = inject(GithubApiService);

  show() {
    this.isVisible = true;
  }

  ngOnInit() {
    console.log('on init');
    this.getUsers();
  }

  getUsers() {
    this.githubApiService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => console.log(err),
      complete: () => console.log('complted'),
    });
  }

  searchUsers() {
    if (!this.search.trim()) {
      this.getUsers();
      return;
    }

    this.githubApiService.searchUsers(this.search).subscribe({
      next: (res) => {
        this.users = res;
      },
    });
  }
}
