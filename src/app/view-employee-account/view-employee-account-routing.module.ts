import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewEmployeeAccountPage } from './view-employee-account.page';

const routes: Routes = [
  {
    path: '',
    component: ViewEmployeeAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewEmployeeAccountPageRoutingModule {}
