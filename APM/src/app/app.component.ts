import { Component } from "@angular/core"

@Component({
    selector: 'pm-root',
    template:`
    <nav class='navbar-expand navbar-light bg-light'>
      <div class="container-fluid">
        <a class='navbar-brand'>{{pageTitle}}</a>
        <ul class= 'nav nav-pills'>
          <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
          <li><a class='nav-link' routerLink='/products'>Product List</a></li>
        </ul>
      </div>
    </nav>
    <div class='contain'>
      <router-outlet></router-outlet>
    </div>
  `
   ,
   styleUrls: ['./app.component.css']
})
export class AppComponent {
    pageTitle: string = 'Yangyang Fashion';
}
 