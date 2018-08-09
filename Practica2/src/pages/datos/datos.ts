import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../provider/user';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { User } from '../../models/user.interface';

@IonicPage()
@Component({
  selector: 'page-datos',
  templateUrl: 'datos.html',
})
export class DatosPage {

  username: String;
  user: User;
  user$: Observable<User>;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private userProvider: UserProvider) {
    
    this.username = this.navParams.get("username");
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatosPage');

    this.userProvider.getUser(this.username).

    subscribe(u => {

      this.user = u;

    },

      (error) => {

        console.error(error);

      }

    )

  }

}
