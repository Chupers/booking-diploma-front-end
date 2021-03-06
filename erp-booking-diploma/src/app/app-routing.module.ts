import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccommodationDetailsComponent } from './accommodation-details/accommodation-details.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ClientsComponent } from './clients/clients.component';
import { HotelManageBaseComponent } from './hotel-manage-base/hotel-manage-base.component';
import { MainContentComponent } from './main-content/main-content.component';
import { OverviewComponent } from './overview/overview.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  { path: '', component: OverviewComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'clients', component: ClientsComponent},
  { path: 'overview',component: OverviewComponent},
  { path: 'staff', component: StaffComponent},
  { path: 'newaccommodation/:id',component: HotelManageBaseComponent},
  { path: 'Accommodation',component:AccommodationComponent},
  { path: 'accommodationDetails/:id',component:AccommodationDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
