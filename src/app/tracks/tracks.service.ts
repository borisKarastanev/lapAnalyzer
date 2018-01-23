import { Injectable } from '@angular/core';

@Injectable()
export class TracksService {

  constructor() { }

  getTracks() {
    const tracksMock: Array<any> = [
      {
        name: 'Sofia Karting Ring',
        length: 750,
        trackLocation: {
          lon: '46.62',
          lat: '32.45'
        }
      },
      {
        name: 'Lauta',
        length: 922,
        trackLocation: {
          lon: '46.62',
          lat: '32.45'
        }
      }
    ];

    return tracksMock;
  }
}
