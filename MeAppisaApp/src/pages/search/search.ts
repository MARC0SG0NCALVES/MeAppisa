import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PackageDetailPage } from '../package-detail/package-detail';

import { Item } from '../../models/item';

import { Package } from '../../models/package';
import { Packages } from "../../providers/packages";


@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  public search: Array<Package> = new Array<Package>();
  public packages: Array<Package> = new Array<Package>();


  constructor(public navCtrl: NavController, public navParams: NavParams, public pack: Packages, http: Http) {
    this.pack.getAll().subscribe((data) => this.packages = data);
  }

  public getItems(ev) {
    let val = ev.target.value;
    if (!val || !val.trim()) {
      this.search = new Array<Package>();
      return;
    }
    this.pack.searchNpm(val).subscribe((data) => {
      data.forEach((element) => {
        this.packages.forEach((pack) => {
          if (element.name === pack.name) {
            element['color'] = 'blue';
          }
        });
        this.search.push(element);
      })
    });
  }

  public openItem(pack: Package) {
    this.navCtrl.push(PackageDetailPage, { pack: pack });
  }


}
