import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { error } from 'console';
import { IDepartment } from '../../interfaces/idepartment';
import { Icities } from '../../interfaces/Icities';

@Injectable({
  providedIn: 'root'
})
export class CitiesServiceService {

  constructor(private http: HttpClient) { }

  private httpOption={
    Headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  getDepartments(): Observable<IDepartment[]>{
    return this.http.get<IDepartment[]>(`${environment.urlbase}Department`)
    .pipe(catchError(this.handleError<IDepartment[]>('getDepartments',[])));
  }

  getCities(idDeparment: number):Observable<Icities[]>{
    return this.http.get<Icities[]>(`${environment.urlbase}Department/${idDeparment}/cities`)
    .pipe(catchError(this.handleError<Icities[]>('getCities',[])));
  }

  private handleError <T>(operation = 'operation',result?: T){
    return (error:any):Observable<T> => {
      console.log(error);
      
      return of(result as T)
    }
  }


}
