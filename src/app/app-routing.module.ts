import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CanadaComponent } from './canada/canada.component';
import { NorwayComponent } from './norway/norway.component';
import { FinlandComponent } from './finland/finland.component';
import { ItalyComponent } from './italy/italy.component';
import { NetherlandsComponent } from './netherlands/netherlands.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: MainPageComponent },
      { path: 'canada', component: CanadaComponent },
      { path: 'norway', component: NorwayComponent },
      { path: 'finland', component: FinlandComponent },
      { path: 'italy', component: ItalyComponent },
      { path: 'netherlands', component: NetherlandsComponent },
      { path: 'about', component: AboutComponent }
    ]
  },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
