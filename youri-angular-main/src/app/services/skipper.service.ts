import { Injectable } from '@angular/core';
import { Skipper } from '../interfaces/skipperInterface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SkipperService {
  private skippersUrl = 'http://localhost:3000/skipper';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  /**
   * @author Youri Janssen
   * @returns an Observable of type Skipper[]
   */
  getSkippers(): Observable<Skipper[]> {
    return this.http
      .get<Skipper[]>(this.skippersUrl)
      .pipe(catchError(this.handleError<Skipper[]>('getSkippers', [])));
  }

  /**
   * @author Youri Janssen
   * @returns an Observable of type Skipper
   */
  getSkipper(id: number): Observable<Skipper> {
    return this.http
      .get<Skipper>(`${this.skippersUrl}/getwithId/${id}`)
      .pipe(catchError(this.handleError<Skipper>(`getSkipper id=${id}`)));
  }

  /**
   * @author Youri Janssen
   * @returns an Observable of type Skipper
   */
  updateSkipper(skipper: Skipper): Observable<object | Skipper> {
    return this.http
      .put(`${this.skippersUrl}/update`, skipper, this.httpOptions)
      .pipe(catchError(this.handleError<Skipper>('updatedSkipper')));
  }

  /**
   * @@author Youri Janssen
   * @description This function handles Http operations that fail.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
