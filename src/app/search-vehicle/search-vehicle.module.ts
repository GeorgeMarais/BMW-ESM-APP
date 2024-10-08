import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchVehiclePageRoutingModule } from './search-vehicle-routing.module';

import { SearchVehiclePage } from './search-vehicle.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchVehiclePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SearchVehiclePage]
})
export class SearchVehiclePageModule {}
