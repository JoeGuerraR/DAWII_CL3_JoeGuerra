import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { FotosComponent } from './fotos/fotos.component';

export const routes: Routes = [
    {path: "", redirectTo: "menu", pathMatch: 'full'},
    {path: "menu", component: MenuComponent, 
        children: [
            {path: "episodios", component: EpisodiosComponent},
            {path: "fotos", component: FotosComponent}
        ]
    }
];