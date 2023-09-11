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
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { CriticalstockComponent } from './criticalstock/criticalstock.component';
import { ExpiringNextMnthComponent } from './expiring-next-mnth/expiring-next-mnth.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    idComponent,
    CategorynameComponent,
    MedicinedetailsComponent,
    NavbarComponent,
    AddComponent,
    UpdateComponent,
    CriticalstockComponent,
    ExpiringNextMnthComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [{provide:AbstractHttpCommunication,useClass:HttpCommunication}],
  bootstrap: [AppComponent]
})
export class AppModule { }
