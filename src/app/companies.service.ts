import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export interface Company {
  name: string;
  domain: string;
  logo: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompaniesService {

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>('https://autocomplete.clearbit.com/v1/companies/suggest?query=:logo').pipe(
      catchError(error => {
        console.log(`Error: ${error.message}`);
        return throwError(() => error);
      })
    );
  }
}
