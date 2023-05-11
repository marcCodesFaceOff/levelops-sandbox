import { Component } from '@angular/core';
import { RateService } from '../rate-service.service';
@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.css']
})
export class RatesComponent {

  constructor(public rateService: RateService) {}

}
