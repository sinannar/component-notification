import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Notification } from 'rxjs/Notification';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommunicationService {

  constructor() {
  }

  public event1 = new Subject<string>();
  public event2 = new Subject<string>();
  public event3 = new Subject<string>();
}
