import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewApiPageRoutingModule } from './view-api-routing.module';

import { ViewApiPage } from './view-api.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewApiPageRoutingModule
  ],
  declarations: [ViewApiPage]
})
export class ViewApiPageModule {}
