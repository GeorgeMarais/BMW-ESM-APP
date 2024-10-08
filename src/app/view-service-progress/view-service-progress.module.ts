import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewServiceProgressPageRoutingModule } from './view-service-progress-routing.module';

import { ViewServiceProgressPage } from './view-service-progress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewServiceProgressPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ViewServiceProgressPage]
})
export class ViewServiceProgressPageModule {}
