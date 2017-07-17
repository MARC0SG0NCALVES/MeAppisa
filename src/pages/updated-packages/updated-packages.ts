import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-updated-packages',
  templateUrl: 'updated-packages.html'
})
export class UpdatedPackagesPage {

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.Name = params.get('Name');
  }
  
}
