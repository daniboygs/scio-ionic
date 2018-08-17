import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController) {
    
  }
  goToChat(user){
    user = user || 'No user entred';
    this.navCtrl.push(ChatPage, {
      data: user
    });
  }

}
