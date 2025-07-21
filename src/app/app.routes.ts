import { Routes } from '@angular/router';
import { ContactsList } from './components/contacts-list/contacts-list';

export const routes: Routes = [
    {
        path: '',
        component: ContactsList,
        pathMatch: 'full'
    }
];
