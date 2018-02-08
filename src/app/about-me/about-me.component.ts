import { Component, OnInit } from '@angular/core';
import { AboutMeService } from './about-me.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutTextList = new Array<string>();
  leftPhotoSource: string;
  rightPhotoSource: string;

  constructor(public aboutMeService: AboutMeService) { }

  ngOnInit() {
    this.getAboutMeText();
    this.getAboutMePhotoSources();
  }

  getAboutMeText(): void {
    this.aboutMeService.getAboutMeText().subscribe(result => {
      result.forEach(paragraph => {
        this.aboutTextList.push(paragraph);
      });
    });
  }

  getAboutMePhotoSources(): void {
    this.aboutMeService.getPhotoSources().subscribe(result => {
      if (result.length >= 1) {
        this.leftPhotoSource = result[0];
        this.rightPhotoSource = result[1];
      }
    });
  }
}
