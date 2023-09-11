import { Component } from '@angular/core';
import { AbstractHttpCommunication, medicinedetails } from '../HttpCommunication';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  medicinedetails:medicinedetails;
  statusDetails!:string;
    constructor(private service:AbstractHttpCommunication){
      this.medicinedetails = new medicinedetails(0,'',0,new Date(),0,0);
    }


 

  // add():void{
  //   var observableResult=this.service.AddMedicines(this.MedicineInventory);
  //     observableResult.subscribe({
  //       next:(r:any)=>this.statusDetails=r.statusText,
  //       error:er=>this.statusDetails=er.message

 

  //     });
  // }

 

  update():void{
    var observableResult=this.service.UpdateMedicines(this.medicinedetails);
      observableResult.subscribe({
        next:(r:any)=>this.statusDetails=r.statusText,
        error:er=>this.statusDetails=er.message

 

      });
  }
}
