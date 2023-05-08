import { Injectable } from '@angular/core';
import { SERVICES } from './services/mock-services'; 
import { Service } from './services/service';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  services: string[] = [];

  add(service: string) {
    this.services.push(service);
  }

  clear() {
    this.services = [];
  }

  getServices(): Service[] {
    return SERVICES;
  }
}
