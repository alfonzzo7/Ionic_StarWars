import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LlamadasPage, MensajesPage, AudioPage } from '../index.pages';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1:any;
  tab2:any;
  tab3:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = LlamadasPage;
    this.tab2 = MensajesPage;
    this.tab3 = AudioPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
