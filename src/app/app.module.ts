import { NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ArViewComponent } from './components/core/ar-view/ar-view.component';
import { HomeComponent } from './components/core/home/home.component';
import { BottomNavComponent } from './components/shared/bottom-nav/bottom-nav.component';
import { MatIconModule} from '@angular/material/icon';
import { RoutePlaceholderComponent } from './components/shared/route-placeholder/route-placeholder.component'

@NgModule({
  declarations: [
    AppComponent,
    ArViewComponent,
    HomeComponent,
    BottomNavComponent,
    RoutePlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
