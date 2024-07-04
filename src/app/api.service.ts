import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Episode } from './episode.model';
import { Foto } from './foto.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiUrl1 = 'https://rickandmortyapi.com/api/episode';
  private apiUrl2 = 'https://jsonplaceholder.typicode.com/photos'; 

  constructor(private http: HttpClient) { }

  getEpisodesImpar(): Observable<Episode[]> {
    return this.http.get<{ results: Episode[] }>(this.apiUrl1).pipe(
      map(response => response.results.filter(episode => episode.id % 2 !== 0))
    );
  }

getFotosFilter(): Observable<Foto[]> {
  return this.http.get<Foto[]>(this.apiUrl2).pipe(
    map(photos => photos.filter(photo => 
      photo.title.startsWith('a') || 
      photo.title.startsWith('r') || 
      photo.title.startsWith('s')
    ))  
  );
  }
}
