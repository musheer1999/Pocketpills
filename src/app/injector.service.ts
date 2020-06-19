import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Icovid } from './covid';
import { throwError, Observable } from 'rxjs'
import { catchError } from 'rxjs/operators'
// import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'       //here we have injectable decorator which tells us that this class can also have dependencies
})
export class InjectorService {

  constructor(private http:HttpClient) { }



  objarra(){
    return [
      {"name":"musheer ahmad","course":"CS"},
      {name:"tazeem",course:"mech"},
      {name:"zakir",course:"ela"}
    ]
  }

https(): Observable<Icovid[]>{ 
return this.http.get<Icovid[]>("https://covid19.mathdro.id/api/daily/2-14-2020").pipe(catchError(this.errorHandler))
}

errorHandler(error: HttpErrorResponse){
  return Observable.throw(error.message || "Server Error")
}

}
