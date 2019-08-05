import { Component } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(public cmnSrv: CommonService) {  }

  sidebarItems = [
    {link: '/', label: 'Specification', icon: 'dashboard'},
    {link: '/steps', label: 'Steps', icon: 'show_chart'},
    {link: '/tracking', label: 'Tracking', icon: 'grid_on'},
    {link: '/results', label: 'Results', icon: 'date_range'},
    {link: '/login', label: 'Login', icon: 'perm_identity'},
  ];

}
