import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Service } from './services/service';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const services = [
      { id: 1, rate: 45, name: 'POS Installations', desc: 'if you have an installation that requires installation across multiple locations or more sophisticated networking requirements we can help.' },
      { id: 2, rate: 50, name: 'Laptop Break/Fix' },
      { id: 3, rate: 55, name: 'Desktop Support' },
      { id: 4, rate: 60, name: 'Google Home Installations' },
      { id: 5, rate: 65, name: 'Network Troubleshooting' },
      { id: 6, rate: 70, name: 'Wordpress Development'},
      { id: 7, rate: 75, name: 'Data Center - Hands Onsite' },
      { id: 8, rate: 80, name: 'Web Development' },
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