import { Component, OnInit } from '@angular/core';
import { TrendingService } from '../trending.service'; 

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.css']
})
export class TrendingMoviesComponent implements OnInit {
  trending: Array<Object> = [];
  constructor(private trendingService: TrendingService) { }

  ngOnInit() {
    this.trendingService.getTrendingMovies().subscribe(response => {
      // console.log(response.results)
      this.trending = response.results
    })
  }

}
