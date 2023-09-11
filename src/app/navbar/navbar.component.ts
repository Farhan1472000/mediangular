import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean=false;//string | null = "";
  loginrole: string | null = "";
  constructor(private router: Router){}
  ngOnInit(){
    this.isLoggedIn = sessionStorage.getItem('token')==null? false:true;
    this.loginrole = sessionStorage.getItem('role');
    alert(this.isLoggedIn);
  }

  ngAfterViewChanged(){}
  logout(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}
