import { Component, OnInit } from '@angular/core';
import { Service } from './service'
import { SERVICES } from './mock-services';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {

  selectedService?: Service;

  services: Service[] = [];

  constructor(private serviceService:ServiceService, private rateService: RateService) {};

  onSelect(service: Service): void {
    this.selectedService = service;
  }
}


