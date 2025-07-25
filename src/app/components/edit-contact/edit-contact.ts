import { Component, inject, input, resource, computed } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-edit-contact',
  standalone: true, // Assuming this is a standalone component
  imports: [],
  template: `
    <p>
      {{ contactResource.value()?.name }}
    </p>
  `,
  styles: ``
})
export class EditContact {
  id = input<string | undefined>();

  apiService = inject(ApiService);

  // Create a computed signal that depends on the id input
  private contactId = computed(() => this.id());

  contactResource = resource({
    loader: (/* No argument here, as we get the ID from contactId directly */) => {
      const currentId = this.contactId(); // Get the current value of the computed signal
      if (currentId) {
        return this.apiService.getContact(currentId);
      }
      return Promise.resolve(undefined); // Handle cases where id might be undefined
    },
  });
}