import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'angular',
  },
  {
    path: 'angular',
    loadChildren: () =>
      import('./angular/angular.module').then((m) => m.AngularModule),
  },
  {
    path: 'react',
    loadChildren: () =>
      import('./react/react.module').then((m) => m.ReactModule),
  },
  {
    path: 'next',
    loadChildren: () => import('./next/next.module').then((m) => m.NextModule),
  },
  {
    path: 'csharp',
    loadChildren: () =>
      import('./csharp/csharp.module').then((m) => m.CsharpModule),
  },
  {
    path: 'efcore',
    loadChildren: () =>
      import('./efcore/efcore.module').then((m) => m.EfcoreModule),
  },
  {
    path: 'netcore',
    loadChildren: () =>
      import('./netcore/netcore.module').then((m) => m.NetcoreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
