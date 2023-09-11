import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractHttpCommunication, medicinedetails } from '../HttpCommunication';

@Component({
  selector: 'app-categoryname',
  templateUrl: './categoryname.component.html',
  styleUrls: ['./categoryname.component.css']
})
export class CategorynameComponent {
  medicinedetails!:medicinedetails[];
  errors!:string;
  button_clicked:boolean=false;
  categoryName: string="";
  constructor(private service: AbstractHttpCommunication) {}
  categoryByName(): void {    
    let observable = this.service.CategoriesByName(this.categoryName);
    observable.subscribe({
      next: (result:any) => {
        this.medicinedetails=result;
        
      },
      error: (err) => (this.errors = err.message),
    });
    this.button_clicked=true;
  }
  

}
export class HttpCommunication extends AbstractHttpCommunication{
    GetMedicinesExpiringNextMonth(): Observable<medicinedetails[]> {
      throw new Error('Method not implemented.');
    }
    GetMedicinesReachingCriticalStock(criticalStockLevel: number): Observable<medicinedetails[]> {
      throw new Error('Method not implemented.');
    }
    sortMedicines(sortBy: string): Observable<medicinedetails[]> {
      throw new Error('Method not implemented.');
    }
    GetMedicines(): Observable<medicinedetails[]> {
      throw new Error('Method not implemented.');
    }
    MedicinesById(id: number): Observable<object> {
      throw new Error('Method not implemented.');
    }
    CategoriesByName(categoryname: string): Observable<object> {
      throw new Error('Method not implemented.');
    }
    DeleteMedicines(id: number): Observable<object> {
      throw new Error('Method not implemented.');
    }
    AddMedicines(md: medicinedetails): Observable<object> {
      throw new Error('Method not implemented.');
    }
    UpdateMedicines(md: medicinedetails): Observable<object> {
      throw new Error('Method not implemented.');
    }
    CategoriesById(categoryid: number): Observable<medicinedetails[]> {
        throw new Error("Method not implemented.");

}
}
