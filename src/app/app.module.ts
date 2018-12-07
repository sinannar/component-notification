import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComponentOneComponent } from './component-one/component-one.component';
import { ComponentTwoComponent } from './component-two/component-two.component';
import { ComponentThreeComponent } from './component-three/component-three.component';
import { CommunicationService } from './communication.services';
import { ComponentOneButtonComponent } from './component-one-button/component-one-button.component';
import { ComponentTwoButtonComponent } from './component-two-button/component-two-button.component';
import { ComponentThreeButtonComponent } from './component-three-button/component-three-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoComponent,
    ComponentThreeComponent,
    ComponentOneButtonComponent,
    ComponentTwoButtonComponent,
    ComponentThreeButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CommunicationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
