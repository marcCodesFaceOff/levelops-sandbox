import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Service } from '../services/service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service-search',
  templateUrl: './service-search.component.html',
  styleUrls: [ './service-search.component.css' ]
})
export class ServiceSearchComponent implements OnInit {
  services$!: Observable<Service[]>;
  private searchTerms = new Subject<string>();

  constructor(private serviceService: ServiceService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.services$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.serviceService.searchServices(term)),
    );
  }
}