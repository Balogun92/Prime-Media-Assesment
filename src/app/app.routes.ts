import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/main/layout/layout.component';

export const routes: Routes = [

{
    path: 'home',
    component: LayoutComponent
},

{
  path: 'main',
  loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule),
},
 {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
    }

];
