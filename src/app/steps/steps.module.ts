import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepDetailsComponent } from './step-details/step-details.component';
import { StepsRoutingModule } from './steps-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    StepsRoutingModule,
    NgbModule.forRoot()
  ],
  declarations: [StepDetailsComponent]
})
export class StepsModule { }
