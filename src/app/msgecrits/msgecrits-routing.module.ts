import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MsgecritsPage } from './msgecrits.page';

const routes: Routes = [
  {
    path: '',
    component: MsgecritsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MsgecritsPageRoutingModule {}
