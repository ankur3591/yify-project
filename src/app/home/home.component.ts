import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private movieService: MovieService) { }
  results = [];
  totalCount;
  searchQuery;
  currentPage: number = 1;
  payload = {}
  ngOnInit(): void {
  }
  onSubmit(templateForm){
    this.currentPage = 1;
    this.searchQuery = templateForm.value['movieName'];
    this.movieService.fetchMovies(templateForm.value['movieName']).subscribe(response=>{
      this.totalCount = response.data.movie_count;
      this.results = response.data.movies;
      this.payload['currentPage'] = this.currentPage;
      this.payload['totalCount'] = this.totalCount;
      this.payload['results'] = this.results;
      this.payload['searchQuery'] = this.searchQuery;
    })
  }

  showRelated(movieId){
    this.currentPage = 1;
    this.movieService.showRelatedMovies(movieId).subscribe(response=>{
      this.totalCount = response.data.movie_count;
      this.results = response.data.movies;
      console.log(this.results);
    }) 
  }
}
