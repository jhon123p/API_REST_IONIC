import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewApiPage } from './view-api.page';

const routes: Routes = [
  {
    path: '',
    component: ViewApiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewApiPageRoutingModule {}
