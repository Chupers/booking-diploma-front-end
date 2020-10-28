import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './main-page/main-page.component';
import {MatIconModule} from '@angular/material/icon';
import { MainPageContentComponent } from './main-page-content/main-page-content.component';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  ReactiveFormsModule }   from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { SearchResultComponent } from './search-result/search-result.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { TestSearchResultComponent } from './test-search-result/test-search-result.component';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    MainPageContentComponent,
    SearchResultComponent,
    TestSearchResultComponent,
    HotelPageComponent,
  ],
  imports: [
    MatCheckboxModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
