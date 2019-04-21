import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { CanadaComponent } from './canada/canada.component';
import { NorwayComponent } from './norway/norway.component';
import { FinlandComponent } from './finland/finland.component';
import { ItalyComponent } from './italy/italy.component';
import { NetherlandsComponent } from './netherlands/netherlands.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    NotFoundComponent,
    MainPageComponent,
    CanadaComponent,
    NorwayComponent,
    FinlandComponent,
    ItalyComponent,
    NetherlandsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
