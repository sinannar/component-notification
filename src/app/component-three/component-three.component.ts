import { Component, OnInit } from '@angular/core';
import {CommunicationService} from '../communication.services';

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css']
})
export class ComponentThreeComponent implements OnInit {
  text: string;
  constructor(public comm: CommunicationService) {

    this.comm.event3.subscribe(str => {
      this.text = str;
    });

  }
  ngOnInit() {
  }

}
