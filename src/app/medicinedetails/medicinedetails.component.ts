import { Component } from '@angular/core';
import { AbstractHttpCommunication, medicinedetails } from '../HttpCommunication';

@Component({
  selector: 'app-medicinedetails',
  templateUrl: './medicinedetails.component.html',
  styleUrls: ['./medicinedetails.component.css']
})
export class MedicinedetailsComponent {
  medicinedetails:medicinedetails[]=[];
  errors!:string;
  medicinedetail:medicinedetails;
    constructor(private service:AbstractHttpCommunication){
      this.medicinedetail = new medicinedetails(0,'',0,new Date(),0,0);
    }
    ngOnInit(){ 
      this.getMeds();
    }
    getMeds():void{
      let observable=this.service.GetMedicines();
      observable.subscribe({
        next:result=>this.medicinedetails=result,
        error:err=>this.errors=err.message
      });
    }
    
    deleteMed(id:number){
      var confirmation=confirm('Delete Record?');
      if(confirmation==true)
      {
        let observable=this.service.DeleteMedicines(id);
        observable.subscribe({
          next:(result:any)=>{
            //alert(JSON.stringify(result));
            alert(result.statusText);
            this.getMeds();
          },
          error:err=>this.errors=err.message
        });

 

      }
    }
}
