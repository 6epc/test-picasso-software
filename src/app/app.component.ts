import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CompaniesService, Company } from './companies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  companies: Company[] = [];
  cashCompanies: Company[] = [];
  search = '';
  sub!: Subscription;

  constructor(private companiesServ: CompaniesService) { }

  ngOnInit(): void {
    this.sub = this.companiesServ.getCompanies().pipe().subscribe(v => {
      this.companies = v;
      this.cashCompanies = v;
    });
  }

  setCompanyName(name: string) {
    this.search = name;
    this.cashCompanies = [];
  }

  updateData() {
    if (this.cashCompanies.length === 0) {
      this.cashCompanies = this.companies;
    }
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
