import { Routes } from '@angular/router';
import { HeaderComponent } from './publico/header/header.component';

export const routes: Routes = [
    {
        path: '',
        component: HeaderComponent,
        loadChildren: () => import('./publico/publico.routes').then(m=>m.PUBLICO_ROUTES)
    }
];
