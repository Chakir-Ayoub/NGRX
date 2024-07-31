import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../models/course';
import { EditIconComponent } from '../../icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../icons/delete-icon/delete-icon.component';

@Component({
  selector: 'app-list-course',
  standalone: true,
  imports: [EditIconComponent, DeleteIconComponent],
  templateUrl: './list-course.component.html',
  styleUrl: './list-course.component.css',
})
export class ListCourseComponent {
  @Input({ alias: 'my-courses', required: true }) coursesData: Course[] = [];
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  requestDeleteCourse(id: number) {
    this.delete.emit(id);
  }

  requestEditCourse(course: Course) {
    this.edit.emit(course);
  }
}
