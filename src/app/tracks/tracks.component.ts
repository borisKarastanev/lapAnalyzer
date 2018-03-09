import { TracksService } from './tracks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css']
})
export class TracksComponent implements OnInit {
  private tracks: Array<any>;
  private title: String = 'Tracks Near Your Location';
  private logoWidth: number = 100;
  private logoMargin: number = 2;
  private listFilter: string = 'cart';

  constructor(private tracksService: TracksService) {
    this.tracks = tracksService.getTracks();
  }

  ngOnInit() {
  }

}
