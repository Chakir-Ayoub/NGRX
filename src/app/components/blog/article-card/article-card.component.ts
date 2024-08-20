import { Component, input } from '@angular/core';
import { Article } from '../../../models/article';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-card.component.html',
  styleUrl: './article-card.component.css',
})
export class ArticleCardComponent {
  article = input.required<Article>();
}
