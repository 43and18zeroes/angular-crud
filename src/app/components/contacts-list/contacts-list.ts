import { Component, signal } from '@angular/core';
import { Contact } from '../../model/contact';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-contacts-list',
  imports: [MatListModule],
  template: `
    <mat-list>
      @for (contact of contacts(); track contact.id) {
      <mat-list-item>
        <h3 matListItemTitle>{{ contact.name }}</h3>
        <p matListItemLine>{{ contact.email }}</p>
      </mat-list-item>
      }
    </mat-list>
  `,
  styles: ``,
})
export class ContactsList {
  contacts = signal<Contact[]>([
    {
      id: '1',
      name: 'Bibbye Gutcher',
      phone: '886-131-9176',
      email: 'bgutcher@smh.com.au',
    },

    {
      id: '2',
      name: 'Teador Rubinov',
      phone: '473-776-6927',
      email: 'trubinovi@smh.com.au',
    },
    {
      id: '3',
      name: 'Lynett Rubbens',
      phone: '352-706-0306',
      email: 'lrubbensj@smh.com.au',
    },
    {
      id: '4',
      name: 'Arlyn Coopper',
      phone: '921-267-0814',
      email: 'acoopperk@smh.com.au',
    },
    {
      id: '5',
      name: 'Glenna Reichert',
      phone: '601-831-2950',
      email: 'greichertl@smh.com.au',
    },
    {
      id: '6',
      name: 'Dayle Goodbar',
      phone: '809-548-5184',
      email: 'dgoodbarm@smh.com.au',
    },
    {
      id: '7',
      name: 'Adelaida McLenahan',
      phone: '810-776-4700',
      email: 'amclenahann@smh.com.au',
    },
    {
      id: '8',
      name: 'Klementina Glencros',
      phone: '772-965-0604',
      email: 'kglencroso@smh.com.au',
    },
    {
      id: '9',
      name: 'Benton Spottiswoode',
      phone: '379-318-5231',
      email: 'bspottiswoodep@smh.com.au',
    },
    {
      id: '10',
      name: 'Lilah Edmeads',
      phone: '617-642-8353',
      email: 'ledmeadsr@smh.com.au',
    },
    {
      id: '11',
      name: 'Aron Hounsom',
      phone: '263-820-2059',
      email: 'ahounsoms@smh.com.au',
    },
    {
      id: '12',
      name: 'Alvan Cadagan',
      phone: '725-709-3549',
      email: 'acadagant@smh.com.au',
    },
    {
      id: '13',
      name: 'Dorree Jarmaine',
      phone: '798-842-8947',
      email: 'djarmaineu@smh.com.au',
    },
    {
      id: '14',
      name: 'Haskell Giff',
      phone: '777-675-9257',
      email: 'hgiffv@smh.com.au',
    },
    {
      id: '15',
      name: 'Chloette Spickett',
      phone: '542-870-7603',
      email: 'cspickettw@smh.com.au',
    },
    {
      id: '16',
      name: 'Frederique Malser',
      phone: '870-179-4375',
      email: 'fmalserx@smh.com.au',
    },
    {
      id: '17',
      name: 'Lindy Allmann',
      phone: '407-750-6893',
      email: 'lallmanny@smh.com.au',
    },
    {
      id: '18',
      name: 'Fonz Edlyne',
      phone: '502-315-0210',
      email: 'fedlynez@smh.com.au',
    },
    {
      id: '19',
      name: 'Aundrea Gomm',
      phone: '616-554-4632',
      email: 'agomm10@smh.com.au',
    },
    {
      id: '20',
      name: 'Gavan Debrick',
      phone: '215-680-6072',
      email: 'gdebrick11@smh.com.au',
    },
    {
      id: '21',
      name: 'Evelyn Piddington',
      phone: '942-861-1845',
      email: 'epiddington12@smh.com.au',
    },
  ]);
}
