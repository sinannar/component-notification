import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.services';

@Component({
  selector: 'app-component-one-button',
  templateUrl: './component-one-button.component.html',
  styleUrls: ['./component-one-button.component.css']
})
export class ComponentOneButtonComponent implements OnInit {

  constructor(public service: CommunicationService) {
  }

  _value = 0;

  pushValue() {
    this.service.event1.next(this._value.toString());
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
