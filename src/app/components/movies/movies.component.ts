import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MoviesInfo } from 'src/app/dtos/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieName: string;
  moviesList: MoviesInfo [];

  constructor(private movieService: MoviesService) { }

  ngOnInit() {
  }

  search() {
    this.movieService.searchMovies(this.movieName).subscribe(response => this.moviesList = response.Search);
  }

  getInfo(movideId: string) {
    this.movieService.searchMovieById(movideId).subscribe(response => console.log(response));
  }

}
