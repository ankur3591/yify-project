import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  fetchMovies(query): Observable<any> {
    return this.http.get(`https://yts.mx/api/v2/list_movies.json?query_term=${query}`);
  }
  searchByPageIndex(query, index): Observable<any> {
    return this.http.get(`https://yts.mx/api/v2/list_movies.json?query_term=${query}&limit=20&page=${index}`);
  }
  showRelatedMovies(movieId): Observable<any> {
    return this.http.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${movieId}`);
  }
  upcomingMovies(): Observable<any> {
    return this.http.get(`https://yts.mx/api/v2/list_upcoming.json`);
  }
}
