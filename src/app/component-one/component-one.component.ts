import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.services';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  text: string;
  constructor(public comm: CommunicationService) {

    this.comm.event1.subscribe(str => {
      this.text = str;
    });

  }

  ngOnInit() {
  }

}
