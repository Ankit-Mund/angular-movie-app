import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TrendingService {
  
  trendingUrl = 'https://api.themoviedb.org/3/trending/all/day?api_key=41d5b6b35fd639418159e359413401eb'
  constructor(private httpClient: HttpClient) { }
  getTrendingMovies() {
    return this.httpClient.get(this.trendingUrl)
  }
}
