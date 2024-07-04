import { Component, OnInit } from '@angular/core';
import { Episode } from '../episode.model';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})
export class EpisodiosComponent implements OnInit{
  episodes: Episode[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getEpisodesImpar().subscribe(data => {
      this.episodes = data;
    });
  }
}