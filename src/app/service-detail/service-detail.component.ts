import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Service } from '../services/service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})

export class ServiceDetailComponent implements OnInit{
  service: Service | undefined;

  constructor(
    private route: ActivatedRoute,
    private serviceService: ServiceService,
    private location: Location
  ) {}
  
  ngOnInit(): void {
    this.getService();
  }
  
  getService(): void {
    const rate = Number(this.route.snapshot.paramMap.get('rate'));
    this.serviceService.getService(rate)
      .subscribe(service => this.service = service);
  }

  goBack(): void {
    this.location.back();
  }
}
