import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackingDetailsComponent } from './tracking-details/tracking-details.component';
import { TrackingRoutingModule } from './tracking-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TrackingRoutingModule
  ],
  declarations: [TrackingDetailsComponent]
})
export class TrackingModule { }
