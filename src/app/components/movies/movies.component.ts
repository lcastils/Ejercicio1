import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieName: string;

  constructor() { }

  ngOnInit() {
  }

  search() {
    alert(this.movieName);
  }

}
