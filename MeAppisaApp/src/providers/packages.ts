import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Api } from './api';

import { Package } from '../models/package';
import { User } from "./providers";
import { PackageUpdated } from "../models/package-updated";
import { PackageDetail } from "../models/package-detail";

@Injectable()
export class Packages {

  constructor(public http: Http, public api: Api, public user: User) { }

  public searchNpm(value: string): Observable<Array<Package>> {
    return this.api.get('Packages/search', { filter: value })
      .map(resp => this.makePackageArray(resp.json()));
  }

  public getPackageDetails(value: string): Observable<PackageDetail> {
    return this.api.get('Packages/searchOne', { filter: value })
      .map(resp => new PackageDetail(resp.json()));
  }

  public getAll(): Observable<Array<Package>> {
    return this.api.get('Developers/' + this.user.id() + '/package', { access_token: this.user.token() })
      .map(resp => this.makePackageArray(resp.json()));
  }

  public getUpdates(): Observable<Array<PackageUpdated>> {
    return this.api.get('Developers/' + this.user.id() + '/getPackagesToUpdate', { access_token: this.user.token() })
      .map(resp => this.makePackageUpdatedArray(resp.json()));
  }

  public add(pack: Package) {
    this.api.post('Developer/' + this.user.id + '/Package', pack)
  }

  public delete(pack: Package) {
  }

  private makePackageArray(value: any): Array<Package> {
    const packages = new Array<Package>();
    packages.length = 0;
    value.forEach(element => {
      packages.push(new Package(element));
    });
    return packages;
  }

  private makePackageUpdatedArray(value: any): Array<PackageUpdated> {
    const packages = new Array<PackageUpdated>();
    packages.length = 0;
    value.forEach(element => {
      packages.push(new PackageUpdated(element));
    });
    return packages;
  }
}
