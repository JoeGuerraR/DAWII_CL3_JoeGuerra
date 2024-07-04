import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  constructor( private router: Router, private route: ActivatedRoute){}

  irEpisodio(): void{
    this.router.navigate(["episodios"], {relativeTo: this.route});

  }
}
