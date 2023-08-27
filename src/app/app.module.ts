import { NgModule, isDevMode, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig  } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ArViewComponent } from './components/core/ar-view/ar-view.component';
import { HomeComponent } from './components/core/home/home.component';
import { BottomNavComponent } from './components/shared/bottom-nav/bottom-nav.component';
import { MatIconModule} from '@angular/material/icon';
import { RoutePlaceholderComponent } from './components/shared/route-placeholder/route-placeholder.component';
import { RateArtComponent } from './components/core/rate-art/rate-art.component';
import { HammerModule } from '@angular/platform-browser';
import { WorthPriceChartComponent } from './components/core/worth-price-chart/worth-price-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingScreenComponent } from './components/shared/loading-screen/loading-screen.component';
import { DiscoveryComponent } from './components/core/discovery/discovery.component';
import { LoginComponent } from './components/core/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/core/user/user.component';
import { ModalComponent } from './components/shared/modal/modal.component';
import { ImgBoxComponent } from './components/shared/img-box/img-box.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { SvgComponent } from './components/shared/svg/svg.component';
import { ArtworkComponent } from './components/core/artwork/artwork.component';
import { PaddedContainerComponent } from './components/shared/padded-container/padded-container.component';
import { TopNavComponent } from './components/shared/top-nav/top-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    ArViewComponent,
    HomeComponent,
    BottomNavComponent,
    RoutePlaceholderComponent,
    RateArtComponent,
    WorthPriceChartComponent,
    LoadingScreenComponent,
    DiscoveryComponent,
    LoginComponent,
    UserComponent,
    ModalComponent,
    ImgBoxComponent,
    SvgComponent,
    ArtworkComponent,
    PaddedContainerComponent,
    TopNavComponent
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
    MatIconModule,
    HammerModule,
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    NgxMasonryModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
