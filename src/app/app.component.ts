import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'example';

  localesList: any =[
    {code: 'en', label: 'English'},
    {code: 'nl', label: 'nederlands'}
  ]  
}
