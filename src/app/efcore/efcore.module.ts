import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EfcoreRoutingModule } from './efcore-routing.module';
import { EfcoreComponent } from './efcore.component';


@NgModule({
  declarations: [
    EfcoreComponent
  ],
  imports: [
    CommonModule,
    EfcoreRoutingModule
  ]
})
export class EfcoreModule { }
