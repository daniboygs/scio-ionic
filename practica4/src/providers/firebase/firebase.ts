import { Message } from './../../models/message.interface';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs/internal/Observable';



@Injectable()
export class FirebaseProvider {

  message: Observable<Message>;
  collection: AngularFirestoreCollection<Message>;

  constructor( public db: AngularFirestore) {
    this.collection=this.db.collection('message');
  }

  getMessages(){
    return this.db.collection<Message>('message').valueChanges();
  }
  sendMessage(message: Message){
    this.collection.add(message);  
  }

}
