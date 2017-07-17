import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { ItemCreatePage } from '../item-create/item-create';
import { PackageDetailPage } from '../package-detail/package-detail';

import { Items } from '../../providers/providers';

import { Packages } from "../../providers/packages";
import { PackageUpdated } from "../../models/package-updated";

@Component({
  selector: 'page-list-master',
  templateUrl: 'packages-updated.html'
})
export class PackagesUpdatedPage {

  public currentPackages: Array<PackageUpdated> = new Array<PackageUpdated>();

  constructor(public navCtrl: NavController, public items: Items, public pack: Packages, public modalCtrl: ModalController) {
    this.pack.getUpdates().subscribe((data) => this.currentPackages = data);
  }

  ionViewDidLoad() {
  }

  addItem() {
    let addModal = this.modalCtrl.create(ItemCreatePage);
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  deleteItem(item) {
    this.items.delete(item);
  }


  public packageDetail(pack: PackageUpdated) {
    this.navCtrl.push(PackageDetailPage, { pack: pack });
  }
}
