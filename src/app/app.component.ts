import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';
  firstname = 'Pramod';
  eventFunction(id)
  {
    alert('Welcome to USER : '+id);
  }   
  txtVariable = '';
}
