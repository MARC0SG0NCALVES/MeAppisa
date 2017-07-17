export class PackageUpdated {

    public name: string;
    public newVersion: string;
    public oldVersion: string;

    constructor(obj: any) {
        console.log(obj);
        if (obj) {
            this.name = obj.hasOwnProperty('name') ? obj.name : '';
            this.newVersion = obj.hasOwnProperty('newVersion') ? obj.newVersion : '';
            this.oldVersion = obj.hasOwnProperty('oldVersion') ? obj.oldVersion : '';
        } else {
            this.name = '';
            this.newVersion = '';
            this.oldVersion = '';
        }
    }
}
