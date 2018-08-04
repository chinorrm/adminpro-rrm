import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

menu: any = [{
  title: 'princiapal',
  icon: 'mdi mdi-gauge',
  submenu: [
    { title: 'Dashboard', url: '/dashboard' },
    { title: 'ProgressBar', url: '/progress' },
    { title: 'Graficas', url: '/graficas1' }
  ]
}];

  constructor() { }

}
