import { Component } from '@angular/core';
import { AbstractHttpCommunication, medicinedetails } from '../HttpCommunication';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  medicinedetails:medicinedetails;
  statusDetails!:string;
    constructor(private service:AbstractHttpCommunication){
      this.medicinedetails = new medicinedetails(0,'',0,new Date(),0,0);
    }


 

  add():void{
    var observableResult=this.service.AddMedicines(this.medicinedetails);
      observableResult.subscribe({
        next:(r:any)=>this.statusDetails=r.statusText,
        error:er=>this.statusDetails=er.message

 

      });
  }
}
