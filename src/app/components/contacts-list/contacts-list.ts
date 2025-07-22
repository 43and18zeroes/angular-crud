import { Component, inject, resource, signal } from '@angular/core';
import { Contact } from '../../model/contact';
import { MatListModule } from '@angular/material/list';
import { ApiService } from '../../services/api-service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contacts-list',
  imports: [MatListModule, MatProgressSpinnerModule, MatIconModule, MatButtonModule],
  template: `
    <mat-list>
      @for (contact of contactsResource.value(); track contact.id) {
      <mat-list-item>
        <h3 matListItemTitle>{{ contact.name }}</h3>
        <p matListItemLine>{{ contact.email }}</p>
        <div matListItemMeta>
          <button mat-icon-button>
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      </mat-list-item>
      }
    </mat-list>
    @if (contactsResource.isLoading()) {
      <mat-progress-spinner mode="indeterminate" />
    }
  `,
  styles: ``,
})
export class ContactsList {
  apiService = inject(ApiService);

  contactsResource = resource({
    loader: () => this.apiService.getContacts(),
  })
}
