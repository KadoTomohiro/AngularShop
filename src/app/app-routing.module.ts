import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopComponent } from './top/top.component';
import { WearsComponent } from './wears/wears.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: '', redirectTo: 'top', pathMatch: 'full'},
  {path: 'top', component: TopComponent},
  {path: 'mens_outerwear', component: WearsComponent},
  {path: 'ladies_outerwear', component: WearsComponent},
  {path: 'mens_t-shirts', component: WearsComponent},
  {path: 'ladies_t-shirts', component: WearsComponent},
  {path: 'detail/:wearName', component: DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
