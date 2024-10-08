import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditDealershipPageRoutingModule } from './edit-dealership-routing.module';

import { EditDealershipPage } from './edit-dealership.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditDealershipPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [EditDealershipPage]
})
export class EditDealershipPageModule {}
