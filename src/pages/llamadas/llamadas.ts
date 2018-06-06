import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Personaje } from '../../interfaces/personaje.interface';
import { PERSONAJES } from '../../data/personajes.data';

import { PersonajePage } from '../index.pages';

@Component({
  selector: 'page-llamadas',
  templateUrl: 'llamadas.html',
})
export class LlamadasPage {

  personajes:Personaje[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personajes = PERSONAJES.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LlamadasPage');
  }

  verPersonale(personaje){
    console.log(personaje);
    console.log(JSON.stringify(personaje));
    this.navCtrl.push(PersonajePage, {'personaje': personaje});
  }

}
