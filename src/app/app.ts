import { Component, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatToolbarModule],
  template: `
    <mat-toolbar>My Contatcfs</mat-toolbar>

    <router-outlet />
  `,
  styles: [`
    mat-toolbar {
      justify-content: space-between;

      @include mat.toolbar-overrides (
        (
          container-background-color: var(--mat-sys-primary),
          container-text-color: var(--mat-sys-on-primary),
        )
      );
    }
    `],
})
export class App {
  protected readonly title = signal('angular-crud');
}
