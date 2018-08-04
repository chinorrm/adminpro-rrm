import { Component, OnInit, Inject, ElementRef, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from '../../services/service.index';
@Component({
 selector: 'app-account-settings',
 templateUrl: './account-settings.component.html',
 styleUrls: []
})
export class AccountSettingsComponent implements OnInit {
 constructor(  private renderer: Renderer2, public _settings: SettingsService ) { }
 ngOnInit() {
   this.addChek();
 }

 changeTheme( theme: string, link: ElementRef ) {
  this.applyCheck( link );
  this._settings.applyTheme( theme );
 }
 private applyCheck( link: ElementRef ) {
   let selectors: any = document.getElementsByClassName('selector');
   for (const ref of selectors) {
     ref.classList.remove('working');
   }
   this.renderer.addClass( link, 'working' );
 }

 addChek() {
  let selectors: any = document.getElementsByClassName('selector');
  let theme = this._settings.settings.tema;
  for (const ref of selectors) {
    if (ref.getAttribute('data-theme') === theme) {
      this.renderer.addClass( ref, 'working' );
      break;
    }
  }
 }
}
