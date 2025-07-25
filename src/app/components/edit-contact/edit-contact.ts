import {
  Component,
  inject,
  input,
  resource,
  computed,
  signal,
  linkedSignal,
} from '@angular/core';
import { ApiService } from '../../services/api-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-edit-contact',
  standalone: true, // Assuming this is a standalone component
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, FormsModule],
  template: `
    <form (ngSubmit)="save()">
      <h2>Edit contact</h2>
      <div class="fields">
        <mat-form-field>
          <mat-label>Name</mat-label>
          <input matInput [(ngModel)]="name" name="name" />
        </mat-form-field>
        <mat-form-field>
          <mat-label>Email</mat-label>
          <input matInput [(ngModel)]="email" name="email" />
        </mat-form-field>
        <mat-form-field>
          <mat-label>Phone</mat-label>
          <input matInput [(ngModel)]="phone" name="phone" />
        </mat-form-field>
      </div>
      <div class="actions">
        <button type="submit" mat-flat-button>Save</button>
        <button type="button" mat-raised-button routerLink="/">Cancel</button>
      </div>
    </form>
  `,
  styles: `
    :host {
      padding: 16px;
      display: block;
    }

    .fields {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }

    .actions {
      display: flex;
      gap: 16px;
    }
  `,
})
export class EditContact {
  id = input.required<string>();
  apiService = inject(ApiService);

  name = linkedSignal(() => this.contactResource.value()?.name ?? '');
  email = linkedSignal(() => this.contactResource.value()?.email ?? '');
  phone = linkedSignal(() => this.contactResource.value()?.phone ?? '');

  private contactId = computed(() => this.id());

  contactResource = resource({
    loader: () => {
      const currentId = this.contactId();
      if (currentId) {
        return this.apiService.getContact(currentId);
      }
      return Promise.resolve(undefined);
    },
  });

  async save() {
    await this.apiService.updateContact({
      id: this.id(),
      name: this.name(),
      email: this.email(),
      phone: this.phone(),
    });
  }
}
