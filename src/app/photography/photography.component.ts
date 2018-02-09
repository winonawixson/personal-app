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
           this.photoSources = this.convertSourcesToTemplateModel(results);
        });

    }

    convertSourcesToTemplateModel(photoSources: Array<string>): Array<PhotoRow> {
      const photoSourcesModel = new Array<PhotoRow>();

      const leftPhotoSources = new Array<string>();
      const rightPhotoSources = new Array<string>();

      photoSources.forEach((source, index) => {
        if ((index + 2) % 2 === 0) {
          leftPhotoSources.push(source);
        } else {
          rightPhotoSources.push(source);
        }
      });

      leftPhotoSources.forEach(source => {
        photoSourcesModel.push(<PhotoRow> {
          leftPhotoSource: source,
          rightPhotoSource: ''
        });
      });

      rightPhotoSources.forEach((source, index) => {
        photoSourcesModel[index].rightPhotoSource = source;
      });

      return photoSourcesModel;
    }


}
