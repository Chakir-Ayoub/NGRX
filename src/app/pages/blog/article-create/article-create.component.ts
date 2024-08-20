import { Component, ElementRef, inject, ViewChild } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { Article } from '../../../models/article';
import { BlogService } from '../../../services/blog.service';

@Component({
  selector: 'app-article-create',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.css',
})
export class ArticleCreateComponent {
  categoryService = inject(CategoryService);
  blogService = inject(BlogService);
  router = inject(Router);

  @ViewChild('title') title!: ElementRef;
  @ViewChild('category') category!: ElementRef;
  @ViewChild('body') body!: ElementRef;
  @ViewChild('image') image!: ElementRef;

  submit() {
    const myArticle: Article = {
      title: this.title.nativeElement.value,
      category: this.category.nativeElement.value,
      body: this.body.nativeElement.value,
      image: this.image.nativeElement.value,
      views: 0,
      author: 1,
      reaction: {
        likes: 0,
        dislikes: 0,
      },
    };
    this.blogService.save(myArticle).subscribe({
      next: (res) => {
        this.router.navigate(['/blog/list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
