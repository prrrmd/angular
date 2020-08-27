import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'oneConversion';

  user = {
    name : 'Pramod',
    birthdate : '10/2/1998',
    salary: 7000.56,
    address: 'Akole',
    pincode: 'MH17'
  };
}
