import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { SkipperDetailComponent } from '../components/skipper-detail/skipper-detail.component';
import { SkippersComponent } from '../components/skippers/skippers.component';

@NgModule({
  declarations: [
    AppComponent,
    SkippersComponent,
    SkipperDetailComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
