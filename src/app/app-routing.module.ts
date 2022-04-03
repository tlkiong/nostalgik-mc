import { GalleryRoutes } from './gallery/gallery-routes';
import { HomeRoutes } from './home/home-routes';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RulesRoutes } from './rules/rules-routes';
import { StaffRoutes } from './staff/staff-routes';

const routes: Routes = [
  ...HomeRoutes,
  ...GalleryRoutes,
  ...RulesRoutes,
  ...StaffRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
