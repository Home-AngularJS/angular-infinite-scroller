import { HackerNewsService } from './layout/service/hackernews.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InfiniteScrollerDirective } from './layout/directive/infinite-scroller.directive';

@NgModule({
  declarations: [
    AppComponent,
    InfiniteScrollerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HackerNewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
