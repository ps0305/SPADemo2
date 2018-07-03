import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { PageoneComponent } from './components/pageone/pageone.component';
import { PagetwoComponent } from './components/pagetwo/pagetwo.component';
import { ChildComponent } from './components/child/child.component';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes/app.routes";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PageoneComponent,
    PagetwoComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [IndexComponent]
})
export class AppModule { }
