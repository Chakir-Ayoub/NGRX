import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ContactActionsComponent } from '../contact-actions/contact-actions.component';
import { Observable } from 'rxjs';
import { ContactModels } from '../../../store/contact/contact.models';

@Component({
  selector: 'app-contact-grid',
  standalone: true,
  imports: [ContactActionsComponent,AsyncPipe],
  templateUrl: './contact-grid.component.html',
  styleUrl: './contact-grid.component.css'
})
export class ContactGridComponent {
  contacts!:Observable<ContactModels[]>;
}
