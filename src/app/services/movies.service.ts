import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movies, MoviesInfo } from '../dtos/movies';
import { environment } from 'src/environments/environment';
import { MovieDetail } from '../dtos/movie-detail';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  url: string;
  constructor(private http: HttpClient) { }

  searchMovies(movieName: string)  {
    this.url = environment.urlBase + '?s=' + movieName + '&apikey=' + environment.apikey;
    console.log(this.url);
    return this.http.get< Movies >(this.url);
  }

  searchMovieById(movieId: string) {
    this.url = environment.urlBase + '?i=' + movieId + '&apikey=' + environment.apikey;
    return this.http.get<MovieDetail>(this.url);
  }
}
