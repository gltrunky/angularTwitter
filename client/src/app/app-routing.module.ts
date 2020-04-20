import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwListComponent } from './components/tw-list/tw-list.component';
import { TwAddComponent } from './components/tw-add/tw-add.component';

const routes: Routes = [
  { path: '', redirectTo:'/tw-list', pathMatch:"full" },
  { path: 'tw-list', component: TwListComponent },
  { path: 'tw-add', component: TwAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
