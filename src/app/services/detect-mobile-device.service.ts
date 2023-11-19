import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetectMobileDeviceService {

  constructor() { }
  isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }
}
