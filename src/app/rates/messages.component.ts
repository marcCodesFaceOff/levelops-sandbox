import { Component } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-rates',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class RatesComponent {

  constructor(public messageService: MessageService) {}

}
