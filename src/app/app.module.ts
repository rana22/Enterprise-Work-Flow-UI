import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { RoutingModule } from './services/routing/routing.module';
import { RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
