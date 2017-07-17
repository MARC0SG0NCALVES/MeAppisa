import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UpdatedPackagesPage } from '../updated-packages/updated-packages';
import { PackagesPage } from '../packages/packages';
import { UpdatedPackagesPage } from '../updated-packages/updated-packages';
import { SearchPackagesPage } from '../search-packages/search-packages';
import { PackagesPage } from '../packages/packages';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = UpdatedPackagesPage;
  tab2Root: any = SearchPackagesPage;
  tab3Root: any = PackagesPage;
  constructor(public navCtrl: NavController) {
  }
  goToUpdatedPackages(params){
    if (!params) params = {};
    this.navCtrl.push(UpdatedPackagesPage, {
        'Name': params.Name
    });
  }goToPackages(params){
    if (!params) params = {};
    this.navCtrl.push(PackagesPage);
  }
}
