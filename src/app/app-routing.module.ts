import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { CategorynameComponent } from './categoryname/categoryname.component';
import { CriticalstockComponent } from './criticalstock/criticalstock.component';
import { ExpiringNextMnthComponent } from './expiring-next-mnth/expiring-next-mnth.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { idComponent } from './medicine-id/medicine-id.component';
import { MedicinedetailsComponent } from './medicinedetails/medicinedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
 {path:'',component:LoginpageComponent},
  {path:'loginpage',component:LoginpageComponent},
  {path:'medicineid',component:idComponent},
  {path:'categoryname',component:CategorynameComponent},
  {path:'medicinedetails',component:MedicinedetailsComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'Add',component:AddComponent},
  {path:'Update',component:UpdateComponent},
  {path:'criticalstock',component:CriticalstockComponent},
  {path:'expiringnextmnth',component:ExpiringNextMnthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
