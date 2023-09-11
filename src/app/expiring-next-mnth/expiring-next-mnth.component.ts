import { Component } from '@angular/core';
import { AbstractHttpCommunication, medicinedetails } from '../HttpCommunication';

@Component({
  selector: 'app-expiring-next-mnth',
  templateUrl: './expiring-next-mnth.component.html',
  styleUrls: ['./expiring-next-mnth.component.css']
})
export class ExpiringNextMnthComponent {
  expiringMeds: medicinedetails[] = [];
  errors: string = '';

  constructor(private service: AbstractHttpCommunication) {}

  ngOnInit(): void {
    this.loadExpiringMeds();
  }

  loadExpiringMeds(): void {
    this.service.GetMedicinesExpiringNextMonth().subscribe({
      next: (result: medicinedetails[]) => {
        this.expiringMeds = result;
      },
      error: (err) => {
        this.errors = 'Error fetching expiring medicines.';
      },
    });
  }
}
