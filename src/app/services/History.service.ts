import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { VehicleService } from '../models/VehicleService';



@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  apiUrl = 'https://localhost:7163'
  httpOptions ={
    headers: new HttpHeaders({
      ContentType: 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { 

  }
  
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
    
  }

  createHistory(Service: VehicleService){
    return this.httpClient.post(this.apiUrl + '/api/Services/Create' , VehicleService, this.httpOptions)
  }
  getServiceList(): Observable<VehicleService> {
    return this.httpClient
      .get<VehicleService>(this.apiUrl + '/api/Services/GetAllServices')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  getService(id): Observable<VehicleService> {
    return this.httpClient
      .get<VehicleService>(this.apiUrl + '/api/Services/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateService(item): Observable<VehicleService> {
    return this.httpClient
      .put<VehicleService>(this.apiUrl + '/api/Services/' + item, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updateservice(id, item): Observable<VehicleService> {
    return this.httpClient
      .put<VehicleService>(this.apiUrl + '/api/Services/' + id, item, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  
  // // Delete item by id
  // delete(id) {
  //   return this.httpClient
  //     .delete<Fleet>(this.apiUrl + '/api/Fleets' + '/' + id, this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }



  deleteService(id): Observable<{}> {
  
    return this.httpClient.delete(this.apiUrl + '/api/Services/' +  id , this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  // AddFleet(Service: VehicleService){
  //   return this.httpClient.post(this.apiUrl + '/api/Service/Create' , Service, this.httpOptions)
  // }


  // getServiceList(): Observable<VehicleService> {
  //   return this.httpClient
  //     .get<VehicleService>(this.apiUrl + '/api/Service/GetAllServices')
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }
  
  // updateService(item): Observable<VehicleService> {
  //   return this.httpClient
  //     .put<VehicleService>(this.apiUrl + '/api/Service/UpdateService' + '?' + item, this.httpOptions)
  //     .pipe(
  //       retry(2),
  //       catchError(this.handleError)
  //     )
  // }

  // deleteService(id): Observable<{}> {
  //   return this.httpClient.delete(this.apiUrl + '/api/Service/DeleteService?id=' +  id , this.httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }


  // getService(id): Observable<{}> {
  //   return this.httpClient.get(this.apiUrl + '/api/Service/id?id=' +  id , this.httpOptions)
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

}