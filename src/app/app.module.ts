import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopComponent } from './top/top.component';
import { WearsComponent } from './wears/wears.component';
import { DetailComponent } from './detail/detail.component';
import { HttpModule } from '@angular/http';
import { WearService } from './wear.service';

@NgModule({
  declarations: [
    AppComponent,
    TopComponent,
    WearsComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule
  ],
  providers: [WearService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
