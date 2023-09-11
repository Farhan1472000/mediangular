import { Component } from '@angular/core';
import { AbstractHttpCommunication, medicinedetails } from '../HttpCommunication';

@Component({
  selector: 'app-criticalstock',
  templateUrl: './criticalstock.component.html',
  styleUrls: ['./criticalstock.component.css']
})
export class CriticalstockComponent {
  criticalStockLevel: number = 0; // Set your critical stock level here
  medicines: medicinedetails[] = [];
  errors: string = '';

 

  constructor(private service: AbstractHttpCommunication) {}

 

  ngOnInit(): void {
    this.loadMedicinesReachingCriticalStock();
  }

 

  loadMedicinesReachingCriticalStock(): void {
    this.service.GetMedicinesReachingCriticalStock(this.criticalStockLevel).subscribe({
      next: (result: medicinedetails[]) => {
        this.medicines = result;
      },
      error: (err) => {
        this.errors = 'Error fetching medicines reaching critical stock level.';
      },
    });
  }
}
