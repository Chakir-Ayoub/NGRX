import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ContactListComponent } from "./contact-list/contact-list.component";
import { ContactGridComponent } from "./contact-grid/contact-grid.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [ContactListComponent, ContactGridComponent,AsyncPipe],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {

}
