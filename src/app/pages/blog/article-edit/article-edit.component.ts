import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.css',
})
export class ArticleEditComponent {
  categoryService = inject(CategoryService);
}
