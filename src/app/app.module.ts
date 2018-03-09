import {TracksService} from './tracks/tracks.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {TracksComponent} from './tracks/tracks.component';


@NgModule({
  declarations: [
    AppComponent,
    TracksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    TracksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
