import {
  Component,
  inject,
  input,
  resource,
  computed,
  signal,
} from '@angular/core';
import { ApiService } from '../../services/api-service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-contact',
  standalone: true, // Assuming this is a standalone component
  imports: [MatFormFieldModule, FormsModule],
  template: `
    <form>
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
  styles: ``,
})
export class EditContact {
  id = input<string | undefined>();
  apiService = inject(ApiService);

  name = signal('');
  email = signal('');
  phone = signal('');

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
}
