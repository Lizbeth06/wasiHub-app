import { Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { AyudaComponent } from './ayuda/ayuda.component';

export const PUBLICO_ROUTES: Routes = [
    {
        path:'',
        component:PrincipalComponent
    },

    {
        path:'ayuda',
        component:AyudaComponent
    }
    
];
