import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { EpisodiosComponent } from './episodios/episodios.component';

export const routes: Routes = [
    {path: "", redirectTo: "menu", pathMatch: 'full'},
    {path: "menu", component: MenuComponent, 
        children: [
            {path: "episodios", component: EpisodiosComponent}
        ]   
    }

];