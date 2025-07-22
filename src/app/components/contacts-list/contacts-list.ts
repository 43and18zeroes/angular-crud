import { Component, inject, resource, signal } from '@angular/core';
import { Contact } from '../../model/contact';
import { MatListModule } from '@angular/material/list';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-contacts-list',
  imports: [MatListModule],
  template: `
    <mat-list>
      @for (contact of contactsResource.value(); track contact.id) {
      <mat-list-item>
        <h3 matListItemTitle>{{ contact.name }}</h3>
        <p matListItemLine>{{ contact.email }}</p>
      </mat-list-item>
      }
    </mat-list>
  `,
  styles: ``,
})
export class ContactsList {
  apiService = inject(ApiService);

  contactsResource = resource({
    loader: () => this.apiService.getContacts(),
  })
}
