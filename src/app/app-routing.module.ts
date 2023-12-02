import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { DirectorMessageComponent } from './director-message/director-message.component';
import { AchieverComponent } from './achiever/achiever.component';
import { WhyVidyaAmpleComponent } from './why-vidya-ample/why-vidya-ample.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'contact',component: ContactComponent},
  {path:'video-gallery',component: VideoGalleryComponent},
  {path:'director-message',component: DirectorMessageComponent},
  {path:'achiever-star',component: AchieverComponent},  
  {path:'why-vidya-ample',component: WhyVidyaAmpleComponent},    
  {path:'**',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
