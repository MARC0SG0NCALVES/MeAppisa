export class Package {

  public name: string;
  public version: string;
  public description: string;

  constructor(obj: any) {
    if (obj) {
      this.name = obj.hasOwnProperty('name') ? obj.name : '';
      this.version = obj.hasOwnProperty('version') ? obj.version : '';
      this.description = obj.hasOwnProperty('description') ? obj.description : '';
    } else {
      this.name = '';
      this.version = '';
      this.description = '';
    }
  }
}
