import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGalleryComponent } from './video-gallery/video-gallery.component';

const routes: Routes = [
  {path:'video-gallery',component: VideoGalleryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
