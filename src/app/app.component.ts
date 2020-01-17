import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <a routerLink='Register'>SignUp</a><br/>
    <a routerLink='Login'>SignIn</a><br/>
    <a routerLink='Home'>Home</a><br/>
  </nav>  
  <router-outlet>

  </router-outlet>
  `
})
export class AppComponent {
  title = 'UI';
}
