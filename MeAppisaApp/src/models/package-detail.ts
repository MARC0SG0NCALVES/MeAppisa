export class PackageDetail {

    public name: string;
    public version: string;
    public description: string;
    public page: string;
    public author: string;
    public lastVersion: string;

    constructor(obj?: any) {
        if (obj) {
            this.name = obj.hasOwnProperty('name') ? obj.name : '';
            this.version = obj.hasOwnProperty('version') ? obj.version : '';
            this.description = obj.hasOwnProperty('description') ? obj.description : '';
            this.page = obj.hasOwnProperty('page') ? obj.page : '';
            this.author = obj.hasOwnProperty('author') ? obj.author : '';
            this.lastVersion = obj.hasOwnProperty('lastVersion') ? obj.lastVersion : '';
        } else {
            this.name = '';
            this.version = '';
            this.description = '';
            this.page = '';
            this.author = '';
            this.lastVersion = '';
        }
    }
}
