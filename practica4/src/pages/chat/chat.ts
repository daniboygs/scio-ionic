import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Message } from './../../models/message.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  message: Message;
  messageInput
  user: string;
  show: boolean;
  items: Array<Message>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseProvider: FirebaseProvider) {
    this.user = navParams.get('data');
  }

  ionViewWillLoad() {
    this.firebaseProvider.getMessages().subscribe(
      data => {
        this.items = data;
        this.items.sort(function (a, b) {
          return (a.date > b.date) ? 1 : -1;
        });
      },
      error => {
        console.log(error);
      }
    );
  }
  
  send(message: string){
    this.message= {
      user: this.user,
      body: message,
      date: new Date()
    }
    this.firebaseProvider.sendMessage(this.message)
    this.messageInput = "";
  }

  getDate(date) {
    return date.toDate().toISOString();
  }

}
