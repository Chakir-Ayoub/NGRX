import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactModels } from '../../../store/contact/contact.models';
import { AsyncPipe } from '@angular/common';
import { ContactActionsComponent } from '../contact-actions/contact-actions.component';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [AsyncPipe,ContactActionsComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts!: Observable<ContactModels[]>;
}
