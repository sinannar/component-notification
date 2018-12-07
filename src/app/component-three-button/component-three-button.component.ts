import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.services';

@Component({
  selector: 'app-component-three-button',
  templateUrl: './component-three-button.component.html',
  styleUrls: ['./component-three-button.component.css']
})
export class ComponentThreeButtonComponent implements OnInit {

  constructor(public service: CommunicationService) {
  }

  _value = 0;

  pushValue() {
    this.service.event3.next(this._value.toString());
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
