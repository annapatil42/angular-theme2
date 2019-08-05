import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultDrtailsComponent } from './result-drtails/result-drtails.component';
import { ResultsRoutingModule } from './results-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ResultsRoutingModule
  ],
  declarations: [ResultDrtailsComponent]
})
export class ResultsModule { }
