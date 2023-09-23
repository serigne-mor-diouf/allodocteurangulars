import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderallodocteurComponent } from './headerallodocteur/headerallodocteur.component';

const routes: Routes = [
  {path:"header",component:HeaderallodocteurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
