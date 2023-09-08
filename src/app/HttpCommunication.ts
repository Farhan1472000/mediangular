import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

export class medicinedetails{

    constructor(public id:number, public mediname:string, public categoryid:number,public expirydate:Date,public stocklvl:number,public prize:number){}

}

 

export abstract class AbstractHttpCommunication

{


    abstract GetMedicines():Observable<medicinedetails[]>;

    abstract MedicinesById(id:number):Observable<object>;

    abstract CategoriesById(categoryid:number):Observable<object>;

    abstract CategoriesByName(categoryname:string):Observable<object>;

    abstract DeleteMedicines(medicineid:number):Observable<object>;

    abstract AddMedicines(md:medicinedetails):Observable<object>;

    abstract UpdateMedicines(md:medicinedetails):Observable<object>;

   // abstract getTokenAndAccessProtectedResource():Observable<HttpResponse<TokenAndRole>>

    // abstract getMonths():Observable<string[]>;


}

 

 

@Injectable({providedIn:'root'})

export class HttpCommunication extends AbstractHttpCommunication{

    url='http://localhost:5034';

 

    constructor(private client:HttpClient){ super();}

 

    override MedicinesById(medicineid: number): Observable<object> {

        let path=`${this.url}/Id/${medicineid}`;

        var response = this.client.get(path,{observe:'response'});

        return response;

    }


 

    override CategoriesById(categoryid: number): Observable<medicinedetails[]> {

        let path=`${this.url}/medicinedetails/ByCategory/${categoryid}`;

        const headers = { headers: new HttpHeaders({observe: 'response' }) };

        var result = this.client.get<medicinedetails[]>(path, headers); // make GET http request

        return result;


    }

 

    override CategoriesByName(categoryname: string): Observable<medicinedetails[]> {

        const path = `${this.url}/search?searchTerm=${categoryname}`;

        const headers = { headers: new HttpHeaders({ observe: 'response' }) };


        return this.client.get<medicinedetails[]>(path, headers);

    }

 

    override AddMedicines(md:medicinedetails):Observable<object>{

        const path=`${this.url}/add`;

        const head= new HttpHeaders({'content-type':'application/json',observe:'response'});

        var result=this.client.post(path,md,{headers:head,observe:'response'});

        return result;

    }

 

 

    override UpdateMedicines(md:medicinedetails):Observable<object>{

        const path= `${this.url}/update`;

        const head = new HttpHeaders({'content-type':'application/json',observe:'response'});

        var result=this.client.put(path,md,{headers:head,observe:'response'});

        return result;

    }

 

    override GetMedicines(): Observable<medicinedetails[]>

    {

        let path=`${this.url}/medicinedetails`;

        const headers={headers:new HttpHeaders({observe:'response'})};

        var result=this.client.get<medicinedetails[]>(path,headers);

        return result;

    }

 

    override DeleteMedicines(medicineid: number): Observable<object> {

        let path=`${this.url}/delete/${medicineid}`;

        var response = this.client.delete(path,{observe:'response'});

        return response;

    }

 

    // override getTokenAndAccessProtectedResource():Observable<HttpResponse<TokenAndRole>>{

    //     const url='http://localhost:5015/login';

    //     var credentials=new AppUserCredentialsModel('Anand','123');

    //     const head=new HttpHeaders({'content-type':'application/json'});

    //     var result=this.client.post<TokenAndRole>(url,credentials,{headers:head,observe:'response'});

    //     return result;

 

 

    // }

 

 

    

}

export class TokenAndRole{

    constructor(public token:string,public role:string){}

}

export class AppUserCredentialsModel{

    constructor(public userName:string, public password:string){}

}
