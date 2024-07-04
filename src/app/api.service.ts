import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Episode } from './episode.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {private apiUrl1 = 'https://rickandmortyapi.com/api/episode';

  constructor(private http: HttpClient) { }

  getEpisodesImpar(): Observable<Episode[]> {
    return this.http.get<{ results: Episode[] }>(this.apiUrl1).pipe(
      map(response => response.results.filter(episode => episode.id % 2 !== 0))
    );
  }
}
