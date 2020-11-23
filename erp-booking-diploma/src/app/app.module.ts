import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Page components
import { MainContentComponent } from './main-content/main-content.component';
import { OverviewComponent } from './overview/overview.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClientsComponent } from './clients/clients.component';
import { StaffComponent } from './staff/staff.component';
//Mat-modules
import {MatStepperModule} from '@angular/material/stepper';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { SignUpOrgComponent } from './sign-up-org/sign-up-org.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { HotelManageComponent } from './hotel-manage/hotel-manage.component';
import { HotelManageBaseComponent } from './hotel-manage-base/hotel-manage-base.component';
import {MatTreeModule} from '@angular/material/tree';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/TokenInterceptor';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { MatExpansionModule} from '@Angular/material/expansion'


@NgModule({
  declarations: [
    AppComponent,
    MainContentComponent,
    OverviewComponent,
    CalendarComponent,
    ClientsComponent,
    StaffComponent,
    SignUpOrgComponent,
    HotelManageComponent,
    HotelManageBaseComponent,
    AccommodationComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatCardModule,
    MatTreeModule,
    MatExpansionModule,
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
