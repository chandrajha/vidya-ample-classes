import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'home',component: HomeComponent},
  {path:'contact',component: ContactComponent},
  {path:'video-gallery',component: VideoGalleryComponent},
  {path:'**',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
