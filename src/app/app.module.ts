import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DirectorMessageComponent } from './director-message/director-message.component';
import { MatCardModule } from '@angular/material/card';
import { AchieverComponent } from './achiever/achiever.component';
import { WhyVidyaAmpleComponent } from './why-vidya-ample/why-vidya-ample.component';
import { OlympiadBannerComponent } from './olympiad-banner/olympiad-banner.component';
import { TeachingMethodlogyComponent } from './teaching-methodlogy/teaching-methodlogy.component';
import { ResidencialProgramComponent } from './residencial-program/residencial-program.component';
@NgModule({
  declarations: [
    AppComponent,
    VideoGalleryComponent,
    HomeComponent,
    ContactComponent,
    DirectorMessageComponent,
    AchieverComponent,
    WhyVidyaAmpleComponent,
    OlympiadBannerComponent,
    TeachingMethodlogyComponent,
    ResidencialProgramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatCardModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
