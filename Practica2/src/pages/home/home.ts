import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  send(name){
    if(name){
      this.navCtrl.push("DatosPage", {username: name});

      console.log(name);
  }
  }

}
