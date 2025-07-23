import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
  ],
  template: `
    <mat-toolbar
      >My Contatcs
      <a mat-icon-button routerLink="/add">
        <mat-icon>add_circle</mat-icon>
      </a>
    </mat-toolbar>

    <router-outlet />
  `,
  styles: [
    `
      @use '@angular/material' as mat;

      mat-toolbar {
        justify-content: space-between;

        @include mat.toolbar-overrides(
          (
            container-background-color: var(--mat-sys-primary),
            container-text-color: var(--mat-sys-on-primary),
          )
        );

        @include mat.icon-button-overrides(
          (
            icon-color: var(--mat-sys-on-primary),
          )
        );
      }
    `,
  ],
})
export class App {
  protected readonly title = signal('angular-crud');
}
