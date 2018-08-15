import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contactsList:any[]=[];
  
  constructor(public navCtrl: NavController, private contacts:Contacts) {
    this.loadContactsList();
  }

  loadContactsList(){
    this.contacts.find(["*"])
    .then(res => {
      let showData:any[]=[];
      res.map((item) =>{
        if(item.displayName, item.phoneNumbers != null){
          showData.push({displayName:item.displayName, phoneNumbers:item.phoneNumbers})
        }        
      })
      this.contactsList = showData;
    },error => {
    })
  }
}
