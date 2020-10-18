import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewCarPartComponent } from './components/add-new-car-part/add-new-car-part.component';

const routes: Routes = [
  { path: 'add-new', component: AddNewCarPartComponent },
  { path: 'add-new/:id', component: AddNewCarPartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
