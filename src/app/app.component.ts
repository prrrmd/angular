import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';

  showMsg = true;

  switchValue = 4;
  switchName = 'aaaa';

  users = ['Akash','Pramod','Shubham'];

  txtColor = 'green';
  readMe(){console.log('Button clicked')};
}
