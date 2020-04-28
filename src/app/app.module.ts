import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';
import { LangTranslateModule } from './lang-translate/lang-translate.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SortPipe } from './sort.pipe';
import { DynamicComponent } from './dynamic/dynamic.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    ProductsComponent,
    DashboardComponent,
    SortPipe,
    DynamicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LangTranslateModule
  ],
  entryComponents: [
    DynamicComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
