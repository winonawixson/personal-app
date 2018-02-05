import { Component, OnInit } from '@angular/core';
import { PhotographyModel } from './photography.model';

@Component({
  selector: 'app-photography',
  templateUrl: './photography.component.html',
  styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {

  photos: Array<PhotographyModel>;

  constructor() { }

  ngOnInit() {
    this.photos = [
      {
        title: 'Puppy',
        contentText: `Here's a small puppy I found a picture of. :)`,
        imageSource: './assets/images/puppy.jpg'
      },
      {
        title: 'Sunrise',
        contentText: ` Here's a sunrise I found a picture of. And now more text...`,
        imageSource: './assets/images/sunrise.jpg'
      },
      {
        title: 'Koala',
        contentText: `Here's a small koala I found a picture of. :)`,
        imageSource: './assets/images/koala.jpg'
      }
    ];
  }

}
