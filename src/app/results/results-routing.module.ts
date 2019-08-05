import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultDrtailsComponent } from './result-drtails/result-drtails.component';

const routes: Routes = [
  {
    path: '', component: ResultDrtailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultsRoutingModule { }
