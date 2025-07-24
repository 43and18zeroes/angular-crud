import { Component, inject, input, resource } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-edit-contact',
  imports: [],
  template: `
    <p>
      {{ contactResource.value()?.name }}
    </p>
  `,
  styles: ``
})
export class EditContact {
  id = input<string>();

  apiService = inject(ApiService)

  contactResource = resource({
    request: this.id,
    loader: ({ request: id }) => this.apiService.getContact(id),
  })
}
