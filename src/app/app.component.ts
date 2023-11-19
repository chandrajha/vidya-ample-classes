import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { DetectMobileDeviceService } from './services/detect-mobile-device.service';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit{

  constructor(private detectDevice:DetectMobileDeviceService){}

  ngOnInit(): void {
    this.addEvent();    
  }

  @HostListener('window:resize', ['$event']) onResize(event:any) {
    console.log('event :: ',event);
  }

  
   
  
  title = 'vidya-ample';
  selectedValue: string='';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  myFunction() {    
    if ($('#myLinks').css('display') === "block") {
      $('#myLinks').css('display','none');
    } else {
      $('#myLinks').css('display','block');
      $('.super-menu').css('display','block');

    }
  }

  addEvent(){    
    if(this.detectDevice.isMobile()){
      $( ".super-menu nav ul li" ).on( "click", function() {
        if(this.getAttribute('class') !== 'dropdown'){        
            $('#myLinks').css('display','none');
        }
      });
    }   
  }  
}
