module.exports.enableMethods = (Developer) => {
    Developer.getToUpdated = (id, cb) => {

        Developer.findOne({ include: 'package', where: { id: id } },
            (err, developer) => {
                var response = new Array();
                developer.package.count()
                    .then((total) => {
                        var i = 0;

                        developer.package().forEach((element) => {

                            var exec = require('child_process').exec;
                            exec('npm show ' + element.name + ' version',
                                (error, sucess, failed) => {
                                    i += 1;
                                    if (error !== null || failed) {
                                        console.log(error + '\n' + failed);
                                    } else if (sucess.replace('\n', '') !== element.version) {
                                        response.push({ name: element.name, oldVersion: element.version, newVersion: sucess.replace('\n', '') });
                                    }

                                    if (i === total) { cb(null, response); }
                                });
                        });
                    });
            });
    };
}