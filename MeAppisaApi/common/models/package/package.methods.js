module.exports.enableMethods = (Package) => {
    Package.search = (filter, cb) => {
        var exec = require('child_process').exec;
        exec('npm search --json=true --parseable=true --searchstaleness=10 ' + filter,
            (error, sucess, failed) => {
                if (error !== null || failed) {
                    cb(null, error + failed);
                } else {
                    var object = JSON.parse(sucess);
                    var response = new Array();
                    object.forEach(function (element) {
                        response.push({
                            name: element.name,
                            version: element.version,
                            description: element.description
                        });
                    });
                    cb(null, response);
                }
            });
    };

    Package.searchOne = (filter, cb) => {
        var exec = require('child_process').exec;
        exec('npm show --json=true --parseable=true ' + filter,
            (error, sucess, failed) => {
                if (error !== null || failed) {
                    cb(null, error + failed);
                } else {
                    var object = JSON.parse(sucess);
                    var response = {
                        name: object.name,
                        description: object.description,
                        version: object.version,
                        page: object.homepage,
                        author: object.author,
                        lastVersion: object.versions[object.versions.length - 1]
                    };
                    cb(null, response);
                }
            });
    };
}