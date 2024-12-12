import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular, IonButton } from '@ionic/angular/standalone';
import { register as registerSwiperElements } from 'swiper/element/bundle';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

registerSwiperElements();
bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
