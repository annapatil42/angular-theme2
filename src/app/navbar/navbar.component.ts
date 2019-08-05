import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CommonService } from '@shared/services/common.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  constructor( public cmnSrv: CommonService, public router: Router) { }
  gotoLogin(){
    this.router.navigateByUrl('/auth');
  }

}
