import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, RouterLink],
  template: `
    <form>
      <h2>Add contact</h2>
      <div class="fields">
        <mat-form-field>
          <mat-label>Name</mat-label>
          <input matInput />
        </mat-form-field>
        <mat-form-field>
          <mat-label>Email</mat-label>
          <input matInput />
        </mat-form-field>
        <mat-form-field>
          <mat-label>Phone</mat-label>
          <input matInput />
        </mat-form-field>
      </div>
      <div class="actions">
        <button mat-flat-button>Save</button>
        <button mat-raised-button routerLink="/">Cancel</button>
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
export class AddContact {}
