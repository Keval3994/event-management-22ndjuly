import {Injectable} from '@angular/core';
import {UserModel} from '../models/user.model';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import "rxjs/add/operator/map";
import {Post} from '../models/post';

@Injectable()
export class UserService{
constructor( private _http:Http){

    }
private url:string = "https://jsonplaceholder.typicode.com/users";
getAllUser() : Observable<UserModel[]>{
return this._http.get(this.url).map(res => res.json());
}
}
