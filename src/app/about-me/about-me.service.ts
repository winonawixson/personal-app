import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AboutMeText, AboutMePhotoSources } from './about-me.model';
import 'rxjs/add/observable/of';

@Injectable()
export class AboutMeService {

  getAboutMeText(): Observable<Array<string>> {
    return Observable.of(AboutMeText);
  }

  getPhotoSources(): Observable<Array<string>> {
    return Observable.of(AboutMePhotoSources);
  }

}
