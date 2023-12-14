import { Component, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  pageIn = [false, false, false, false];
  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd){
        console.log("evento", event)
        switch (event.urlAfterRedirects){
          case "/conversion":
            this.pageIn = [false, true, false, false]
            console.log("home")
            break;
          case "/subscription":
            this.pageIn = [true, false, false, false]
            console.log("subs")
            break;
          case "/currency":
            this.pageIn = [false, false, true, false]
            console.log("currency")
            break;
          case "/historical":
            this.pageIn = [false, false, false, true]
            console.log("his")
            break;
        }
      }
    })
  }
    linker(link: string){
        this.router.navigate([link])
  }
}
