import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Packages } from "../../providers/packages";
import { PackageDetail } from "../../models/package-detail";

@Component({
  selector: 'package-item-detail',
  templateUrl: 'package-detail.html'
})
export class PackageDetailPage {
  public item: any;
  public package = new PackageDetail();

  constructor(public navCtrl: NavController, public pack: Packages, navParams: NavParams) {
    this.item = navParams.get('pack');
    this.pack.getPackageDetails(this.item.name).subscribe((data) => this.package = data);
  }
}
