import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'page-personaje',
  templateUrl: 'personaje.html',
})
export class PersonajePage {

  personaje:Personaje;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personaje = navParams.get("personaje");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonajePage');
  }

}
