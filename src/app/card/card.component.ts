import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private movieService: MovieService) { }
  @Input('payload') payload;
  totalCount;
  currentPage: number = 1;
  results;
  searchQuery;
  ngOnInit(): void {
    this.totalCount = this.payload['totalCount'];
    this.currentPage = this.payload['currentPage'];
    this.searchQuery = this.payload['searchQuery'];
    this.results = this.payload['results'];
  }
  async getPaginatedData($event) {
    this.currentPage = $event;
    window.scroll(0, 0);
    this.movieService.searchByPageIndex(this.searchQuery, $event).subscribe(response => {
      this.results = response.data.movies;
    })
  }
}
