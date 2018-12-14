import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TrendingMoviesComponent } from './trending-movies/trending-movies.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { TrendingService } from './trending.service';
import { UpcomingService } from './upcoming.service'

import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { DetailsComponent } from './details/details.component';
import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    TrendingMoviesComponent,
    UpcomingComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    AppRoutingModule
  ],
  providers: [TrendingService,UpcomingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
