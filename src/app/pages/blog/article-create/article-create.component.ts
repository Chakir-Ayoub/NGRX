import { Component } from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.css',
})
export class ArticleCreateComponent {}
