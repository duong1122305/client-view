import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class ProductServices{
     constructor(private http : HttpClient){}

    public getProduct(){
        return this.http.get('http://localhost:5029/api/product');
    }
}