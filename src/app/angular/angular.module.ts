import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';

@NgModule({
  declarations: [AngularComponent],
  imports: [CommonModule, AngularRoutingModule, MatListModule],
})
export class AngularModule {}
