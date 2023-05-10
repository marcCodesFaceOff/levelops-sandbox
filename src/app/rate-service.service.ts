import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RateService {
  rate: string[] = [];

  add(rate: string) {
    this.rate.push(rate);
  }

  clear() {
    this.rate = [];
  }
}