import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-contact',
  imports: [MatFormFieldModule, MatInputModule],
  template: `
    <h2>Add contact</h2>
    <form class="fields">
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
      <div>
        <button mat-flat-button>Save</button>
        <button mat-raised-button>Cancel</button>
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
  `
})
export class AddContact {

}
