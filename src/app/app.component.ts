import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mediangular';
  isLoggedIn: boolean=false;

 

  constructor(private router: Router) {}

 

  ngOnInit() {
    // Listen to route changes
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Check if the current route is the login page
        this.isLoggedIn = !this.isLoginPage();
      }
    });
  }

 

  // Check if the current route is the login page
  isLoginPage(): boolean {
    return this.router.url === '/login';
  }
}
