import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: Settings = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };
  constructor( @Inject( DOCUMENT ) private _document) {
    this.loadSettings();
  }

  saveSettings() {
    console.log('Guardado en el localstorag');
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }

  loadSettings() {
    if (localStorage.getItem('settings')) {
    this.settings = JSON.parse(localStorage.getItem('settings'));
      this.applyTheme( this.settings.tema );
    } else {
      this.applyTheme( this.settings.tema );
    }
  }

  applyTheme( theme: string) {
    let url = `assets/css/colors/${theme}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.settings.tema = theme;
    this.settings.temaUrl = url;
    this.saveSettings();
  }
}

interface Settings {
  temaUrl: string;
  tema: string;
}
