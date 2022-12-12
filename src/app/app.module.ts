import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {ENVIRONMENT} from "./environment.service";
import {environment} from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: ENVIRONMENT, useValue: environment}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
