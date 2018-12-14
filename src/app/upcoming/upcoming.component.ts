import { Component, OnInit } from '@angular/core';
import { UpcomingService } from '../upcoming.service'

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  upcoming: Array<Object> = []
  constructor(private upcomingservice : UpcomingService) { }

  ngOnInit() {
    this.upcomingservice.getUpcomingMovies().subscribe(response => {
      // console.log(response.results)
      this.upcoming=response.results
    })
  }
}
