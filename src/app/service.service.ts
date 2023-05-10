import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Service } from './services/service';
import { SERVICES } from './services/mock-services';
import { RateService } from './rate-service.service'; 

@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private rateService: RateService) { }

  getServices(): Observable<Service[]> {
    const services = of(SERVICES);
    this.rateService.add('Service: fetched ');
    return services;
  }
}
