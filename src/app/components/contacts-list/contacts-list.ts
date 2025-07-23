import { Component, computed, inject, resource, signal } from '@angular/core';
import { Contact } from '../../model/contact';
import { MatListModule } from '@angular/material/list';
import { ApiService } from '../../services/api-service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contacts-list',
  imports: [
    MatListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
  ],
  template: `
    <mat-list>
      @for (contact of contactsResource.value(); track contact.id) {
      <mat-list-item>
        <h3 matListItemTitle>{{ contact.name }}</h3>
        <p matListItemLine>{{ contact.email }}</p>
        <div matListItemMeta>
          <button mat-icon-button (click)="deleteContact(contact.id)">
            <mat-icon>delete</mat-icon>
          </button>
        </div>
      </mat-list-item>
      }
    </mat-list>
    @if (loading()) {
    <mat-progress-spinner mode="indeterminate" />
    }
  `,
  styles: ``,
})
export class ContactsList {
  apiService = inject(ApiService);

  deleting = signal(false);

  loading = computed(() => this.contactsResource.isLoading || this.deleting());

  contactsResource = resource({
    loader: () => this.apiService.getContacts(),
  });

  async deleteContact(id: string) {
    this.deleting.set(true);
    await this.apiService.deleteContact(id);
    this.deleting.set(false);
    this.contactsResource.reload();
  }
}
