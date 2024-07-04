import { Component } from '@angular/core';
import { Foto } from '../foto.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fotos',
  standalone: true,
  imports: [],
  templateUrl: './fotos.component.html',
  styleUrl: './fotos.component.css'
})
export class FotosComponent {

  fotos: Foto[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getFotosFilter().subscribe(data => {
      this.fotos = data;
    });
  }
}
