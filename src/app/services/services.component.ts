import { Component, OnInit } from '@angular/core';

import { Service } from './service'
import { ServiceService } from '../service.service';
import { RateService } from '../rate-service.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent implements OnInit{

  selectedService?: Service;

  services: Service[] = [];

  constructor(private serviceService:ServiceService, private rateService: RateService) {};

  ngOnInit(): void {
    this.getServices();
  }

  onSelect(service: Service): void {
    this.selectedService = service;
    this.rateService.add(`ServicesComponent: Selected Service Id=${service.name}`);
  }

  getServices(): void {
    this.serviceService.getServices()
        .subscribe(services => this.services = services)
  }
}


