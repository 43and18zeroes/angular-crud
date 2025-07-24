import { Routes } from '@angular/router';
import { ContactsList } from './components/contacts-list/contacts-list';
import { AddContact } from './components/add-contact/add-contact';
import { EditContact } from './components/edit-contact/edit-contact';

export const routes: Routes = [
    {
        path: '',
        component: ContactsList,
        pathMatch: 'full'
    },
    {
        path: 'add',
        component: AddContact,
    },
    {
        path: 'edit/:id',
        component: EditContact,
    },
];
