import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelPageComponent } from './hotel-page/hotel-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { TestSearchResultComponent } from './test-search-result/test-search-result.component';

const routes: Routes = [
  { path: '', component: MainPageComponent},
  {path: 'search/:search',component: TestSearchResultComponent},
  {path:'hotel/:id',component:HotelPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
