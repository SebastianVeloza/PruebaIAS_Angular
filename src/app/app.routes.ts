import { Routes } from '@angular/router';
import { ListComponentsComponent } from './Components/List/list-components/list-components.component';
import { FilterComponentsComponent } from './Components/Filter/filter-components/filter-components.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: ListComponentsComponent},
    // {path: '/filter', component: FilterComponentsComponent},

    
];
