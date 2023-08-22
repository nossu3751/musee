import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { ArViewComponent } from './components/core/ar-view/ar-view.component';
import { RoutePlaceholderComponent } from './components/shared/route-placeholder/route-placeholder.component';
import { RateArtComponent } from './components/core/rate-art/rate-art.component';
import { DiscoveryComponent } from './components/core/discovery/discovery.component';
import { WorthPriceChartComponent } from './components/core/worth-price-chart/worth-price-chart.component';
import { LoginComponent } from './components/core/login/login.component';
import { UserComponent } from './components/core/user/user.component';
import { canActivateProtectedRoutes } from './services/auth/authenticate.service';

const routes: Routes = [
  {path:"", redirectTo: 'discovery', pathMatch: 'full' },
  // {path:"", component:HomeComponent},
  {path:"login", component:LoginComponent},
  // {path:"ar", component:ArViewComponent},

  {path:"discovery", component:DiscoveryComponent, canActivate:[canActivateProtectedRoutes]},
  {path:"user", component:UserComponent, canActivate:[canActivateProtectedRoutes]},
  {path:"competition", component:RoutePlaceholderComponent, canActivate:[canActivateProtectedRoutes]},
  {path:"shop", component:RoutePlaceholderComponent, canActivate:[canActivateProtectedRoutes]},
  {path:"favorite", component:RoutePlaceholderComponent, canActivate:[canActivateProtectedRoutes]},
  { path: "rate", component: RateArtComponent , canActivate:[canActivateProtectedRoutes]},
  { path: "worthPrice", component: WorthPriceChartComponent, canActivate:[canActivateProtectedRoutes]},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
