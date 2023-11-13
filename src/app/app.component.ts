import { Component } from '@angular/core';
import * as $ from 'jquery';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'vidya-ample';
  selectedValue: string='';
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];


  myFunction() {
    console.log('--->',$('#myLinks').css('display'));
    
    if ($('#myLinks').css('display') === "block") {
      $('#myLinks').css('display','none');
    } else {
      $('#myLinks').css('display','block');
      $('.super-menu').css('display','block');

    }
  }
}
