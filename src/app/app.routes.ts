import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

export const routes: Routes = [ 
    { path: '' , component: HomeComponent },
    { path: 'Sobre', component: SobreComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'notfound', component: NotFoundComponent },
    { path: '**', redirectTo: 'notfound', pathMatch: 'full' }

];
