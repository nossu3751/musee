import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { ArViewComponent } from './components/core/ar-view/ar-view.component';
import { RoutePlaceholderComponent } from './components/shared/route-placeholder/route-placeholder.component';
import { RateArtComponent } from './components/core/rate-art/rate-art.component';
import { WorthPriceChartComponent } from './components/core/worth-price-chart/worth-price-chart.component';

const routes: Routes = [
  {path:"", redirectTo: 'discovery', pathMatch: 'full' },
  // {path:"", component:HomeComponent},
  {path:"ar", component:ArViewComponent},
  {path:"discovery", component:RoutePlaceholderComponent},
  {path:"user", component:RoutePlaceholderComponent},
  {path:"competition", component:RoutePlaceholderComponent},
  {path:"shop", component:RoutePlaceholderComponent},
  {path:"favorite", component:RoutePlaceholderComponent},
  { path: "rate", component: RateArtComponent },
  { path: "worthPrice", component: WorthPriceChartComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
