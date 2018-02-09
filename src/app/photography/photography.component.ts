import { Component, OnInit } from '@angular/core';
import { PhotographyService } from './photography.service';
import { PhotoRow } from './photo-row.model';

@Component({
    selector: 'app-photography',
    templateUrl: './photography.component.html',
    styleUrls: ['./photography.component.scss']
})
export class PhotographyComponent implements OnInit {

    photoSources: Array<PhotoRow>;

    constructor(public photoService: PhotographyService) { }

    ngOnInit() {
      this.getPhotoSources();
    }

    getPhotoSources(): void {
        this.photoService.getPhotoSources().subscribe(results => {
           this.photoSources = results;
        });

    }
}
