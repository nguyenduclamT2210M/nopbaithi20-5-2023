import {HttpClient} from "@angular/common/http";
import {Adapters} from "../enums/adapters";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn:'root'
  }
)
export class ProductService{
  constructor(private http: HttpClient) {

  }


}
