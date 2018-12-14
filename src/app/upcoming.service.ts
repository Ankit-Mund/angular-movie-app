import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UpcomingService {
  upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?api_key=41d5b6b35fd639418159e359413401eb&language=en-US&page=1';
  constructor(private httpClient:HttpClient) {  }
  
  getUpcomingMovies() {
    return this.httpClient.get(this.upcomingUrl)
  }

}
