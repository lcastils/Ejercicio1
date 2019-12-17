import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/dtos/movie-detail';
import { MoviesService } from 'src/app/services/movies.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: string;
  movieInfo: MovieDetail;
  constructor(private ar: ActivatedRoute,
              private movieService: MoviesService) { }

  ngOnInit() {
    this.id = this.ar.snapshot.params.id;
    this.movieService.searchMovieById(this.id).subscribe(response => this.movieInfo = response);
  }


}
