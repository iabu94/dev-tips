import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EfcoreComponent } from './efcore.component';

const routes: Routes = [{ path: '', component: EfcoreComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EfcoreRoutingModule { }
