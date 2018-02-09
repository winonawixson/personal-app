import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PhotoSources } from './photo-sources.model';

@Injectable()
export class PhotographyService {

  getPhotoSources(): Observable<Array<string>> {
    return Observable.of(PhotoSources);
  }

}
