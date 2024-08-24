import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { BlogService } from '../../../services/blog.service';
import { Article } from '../../../models/article';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article-edit',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './article-edit.component.html',
  styleUrl: './article-edit.component.css',
})
export class ArticleEditComponent {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('category') category!: ElementRef;
  @ViewChild('body') body!: ElementRef;
  @ViewChild('image') image!: ElementRef;

  id!: number;

  categoryService = inject(CategoryService);
  blogService = inject(BlogService);
  location = inject(Location);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.loadArticle(res['id']);
      this.id = res['id'];
    });
  }

  loadArticle(id: number) {
    this.blogService.get(id).subscribe((res) => {
      this.title.nativeElement.value = res.title;
      this.category.nativeElement.value = res.category;
      this.body.nativeElement.value = res.body;
      this.image.nativeElement.value = res.image;
    });
  }

  submit() {
    const myArticle: Article = {
      title: this.title.nativeElement.value,
      category: this.category.nativeElement.value,
      body: this.body.nativeElement.value,
      image: this.image.nativeElement.value,
    };
    this.blogService.update(this.id, myArticle).subscribe({
      next: (res) => {
        this.location.back();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
