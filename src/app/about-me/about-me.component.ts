import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  aboutText = `Hi there. I'm Winona, a software developer always ready to learn something new!
                I thrive on adventures exploring new places, great conversations with great people,
                 and a relaxing night in to watch the latest on Netflix.`;
  constructor() { }

  ngOnInit() {
  }

}
