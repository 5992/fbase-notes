import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DataserviceProvider } from '../../providers/dataservice/dataservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public dataservice: DataserviceProvider) {

  }
  ionViewDidLoad(){
    //when page loads
    //get notes
    
  }

}
