import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Service } from './services/service';
import { MessageService } from './message.service'; 

@Injectable({providedIn: 'root'})
export class ServiceService {

  private servicesUrl = 'api/services';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  
  constructor(private http: HttpClient, private messageService: MessageService) { }

    /** GET services from the server */
    getServices(): Observable<Service[]> {
      return this.http.get<Service[]>(this.servicesUrl)
      .pipe(
        tap(_ => console.log('fetched services')),
              catchError(this.handleError<Service[]>('getServices', [])));
    }

    /** GET service by rate. Will 404 if rate not found */
    getService(rate: number): Observable<Service> {
      const url = `${this.servicesUrl}/${rate}`;
      return this.http.get<Service>(url)
        .pipe(
          tap(_ => console.log(`fetched service rate = $${rate}`)),
          catchError(this.handleError<Service>(`getService rate=$${rate}`)));
  }

    /** Log a ServiceService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`Service: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /* GET Services whose name contains search term */
  searchServices(term: string): Observable<Service[]> {
    if (!term.trim()) {
      // if not search term, return empty Service array.
      return of([]);
    }
    return this.http.get<Service[]>(`${this.servicesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found Services matching "${term}"`) :
        this.log(`no Services matching "${term}"`)),
      catchError(this.handleError<Service[]>('searchServices', [])));
  }
}
