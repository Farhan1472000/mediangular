import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategorynameComponent } from './categoryname/categoryname.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { idComponent } from './medicine-id/medicine-id.component';
import { MedicinedetailsComponent } from './medicinedetails/medicinedetails.component';

const routes: Routes = [
  {path:'loginpage',component:LoginpageComponent},
  {path:'medicineid',component:idComponent},
  {path:'categoryname',component:CategorynameComponent},
  {path:'medicinedetails',component:MedicinedetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
