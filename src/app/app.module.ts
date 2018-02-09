import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatCardModule, MatGridListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PhotographyComponent } from './photography/photography.component';
import { AboutMeService } from './about-me/about-me.service';
import { PhotographyService } from './photography/photography.service';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './contact/contact.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    PhotographyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    AboutMeService,
    PhotographyService,
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
