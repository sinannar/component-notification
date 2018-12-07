import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.services';
@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css']
})
export class ComponentTwoComponent implements OnInit {

  text: string;
  constructor(public comm: CommunicationService) {

    this.comm.event2.subscribe(str => {
      this.text = str;
    });

  }
  ngOnInit() {
  }

}
