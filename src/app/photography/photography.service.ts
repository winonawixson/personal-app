import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PhotoSources } from './photo-sources.model';
import { PhotoRow } from './photo-row.model';

@Injectable()
export class PhotographyService {

  getPhotoSources(): Observable<Array<PhotoRow>> {
    return Observable.of(this.convertSourcesToTemplateModel(PhotoSources));
  }

  private convertSourcesToTemplateModel(photoSources: Array<string>): Array<PhotoRow> {
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
