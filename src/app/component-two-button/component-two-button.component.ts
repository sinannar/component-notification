import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.services';

@Component({
  selector: 'app-component-two-button',
  templateUrl: './component-two-button.component.html',
  styleUrls: ['./component-two-button.component.css']
})
export class ComponentTwoButtonComponent implements OnInit {

  constructor(public service: CommunicationService) {

  }

  _value = 0;

  pushValue() {
    this.service.event2.next(this._value.toString());
  }

  increase() {
    this._value++;
    this.pushValue();
  }

  decrease() {
    this._value--;
    this.pushValue();
  }

  ngOnInit() {
  }

}
