import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private service: AuthService){}
  title = 'ConversorFinalFE';

  show():boolean{
    if (this.service.token())
    {
    return true
    }
    return false
  }
}
