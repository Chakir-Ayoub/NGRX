import { Component, Input, input } from '@angular/core';
import { ContactModels } from '../../../store/contact/contact.models';

@Component({
  selector: 'app-contact-actions',
  standalone: true,
  imports: [],
  templateUrl: './contact-actions.component.html',
  styleUrl: './contact-actions.component.css'
})
export class ContactActionsComponent {
  @Input() contact!:ContactModels;
}
