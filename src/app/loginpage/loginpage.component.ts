import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  errormsg:string='';
  constructor(private service:LoginService,private router:Router){}

  //months:string[]=[];
  getToken(userid:string, pwd:string):void{
    var observableObj=this.service.getTokenAndAccessProtectedResource(userid,pwd);
    observableObj.subscribe({
      next:(result: { body: any; })=>{
        var res = JSON.stringify(result.body);
        var output=JSON.parse(res);
        sessionStorage.setItem('token',output.token);
        sessionStorage.setItem('role',output.role);
        //this.router.navigate(['/med']);
        if(sessionStorage.getItem("role") == "admin") {
          this.router.navigate(['/medicinedetails']);
        }
       // alert(JSON.stringify(result.body));
      },
      error:(err:any)=>{
        this.errormsg=err.error;
        var x=1;
      }
    });
  }
}

