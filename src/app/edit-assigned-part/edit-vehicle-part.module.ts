import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditVehiclePartPageRoutingModule } from './edit-vehicle-part-routing.module';

import { EditVehiclePartPage } from './edit-vehicle-part.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditVehiclePartPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditVehiclePartPage]
})
export class EditVehiclePartPageModule {}
