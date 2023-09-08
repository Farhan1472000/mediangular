import { Component } from '@angular/core';
import { AbstractHttpCommunication, medicinedetails } from '../HttpCommunication';

@Component({
  selector: 'app-medicine-id',
  templateUrl: './medicine-id.component.html',
  styleUrls: ['./medicine-id.component.css']
})
export class idComponent {
  medicinedetails!:medicinedetails[];
  errors!:string;
  button_clicked:boolean=false;
  categoryid: number=0;
  constructor(private service: AbstractHttpCommunication) {}
  categoryById(): void {    
    let observable = this.service.CategoriesById(this.categoryid);
    observable.subscribe({
      next: (result:any) => {
        this.medicinedetails=result;
        
      },
      error: (err: { message: string; }) => (this.errors = err.message),
    });
    this.button_clicked=true;
  }

}
