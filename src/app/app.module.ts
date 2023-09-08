import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AbstractHttpCommunication, HttpCommunication } from './HttpCommunication';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { idComponent } from './medicine-id/medicine-id.component';
import { CategorynameComponent } from './categoryname/categoryname.component';
import { MedicinedetailsComponent } from './medicinedetails/medicinedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    idComponent,
    CategorynameComponent,
    MedicinedetailsComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule
  ],
  providers: [{provide:AbstractHttpCommunication,useClass:HttpCommunication}],
  bootstrap: [AppComponent]
})
export class AppModule { }
