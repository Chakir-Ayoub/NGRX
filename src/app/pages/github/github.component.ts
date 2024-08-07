import { Component } from '@angular/core';
import { GithubApiService } from '../../services/github-api.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-github',
  standalone: true,
  imports: [],
  templateUrl: './github.component.html',
  styleUrl: './github.component.css',
})
export class GithubComponent {
  users: User[] = [];

  constructor(private githubApiService: GithubApiService) {
    console.log('consctructor');
  }

  ngOnInit() {
    console.log('on init');
    this.getUsers();
  }

  getUsers() {
    this.githubApiService.getAllUsers().subscribe({
      next: (res) => {
        this.users = res;
        console.log(res);
      },
      error: (err) => console.log(err),
      complete: () => console.log('complted'),
    });
  }
}
