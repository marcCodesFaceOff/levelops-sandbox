import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Service } from './services/service';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const services = [
      { rate: 45, name: 'POS Installations' },
      { rate: 50, name: 'Laptop Break/Fix' },
      { rate: 55, name: 'Desktop Support' },
      { rate: 60, name: 'Google Home Installations' },
      { rate: 65, name: 'Network Troubleshooting' },
      { rate: 70, name: 'Wordpress Development'},
      { rate: 75, name: 'Data Center - Hands Onsite' },
      { rate: 80, name: 'Web Application Development' },
    ];
    return {services};
  }

  // Overrides the genId method to ensure that a service always has a rate.
  // If the services array is empty,
  // the method below returns the initial rate (45).
  // if the services array is not empty, the method below returns the highest
  // service rate + 5.
  genId(services: Service[]): number {
    return services.length > 0 ? Math.max(...services.map(service => service.rate)) + 5 : 11;
  }
}