import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MsgecritsPageRoutingModule } from './msgecrits-routing.module';

import { MsgecritsPage } from './msgecrits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MsgecritsPageRoutingModule
  ],
  declarations: [MsgecritsPage]
})
export class MsgecritsPageModule {}
