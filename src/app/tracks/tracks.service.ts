import { Injectable } from '@angular/core';

@Injectable()
export class TracksService {

  constructor() { }

  getTracks() {
    const tracksMock: Array<any> = [
      {
        name: 'Sofia Karting Ring',
        logo: 'http://www.sofiakarting.com/wp-content/uploads/2017/04/logo-kart-last.png',
        length: 750,
        location: {
          city: 'Sofia',
          lon: '46.62',
          lat: '32.45'
        }
      },
      {
        name: 'Lauta',
        logo: 'http://kartinglauta.com/wp-content/themes/LayerPress/images/faceracer.png',
        length: 922,
        location: {
          city: 'Plovdiv',
          lon: '46.62',
          lat: '32.45'
        }
      }
    ];

    return tracksMock;
  }
}
