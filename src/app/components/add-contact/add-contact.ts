import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink, FormsModule],
  template: `
    <form (ngSubmit)="save()">
      <h2>Add contact</h2>
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
export class AddContact {

  name = signal('');
  email = signal('');
  phone = signal('');

  save() {
    console.log(this.name(), this.email(), this.phone());
  }
}
