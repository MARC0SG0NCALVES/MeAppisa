'use strict';

var helpers = require('../helpers');
var settings = require('./developer/developer.settings');
var triggers = require('./developer/developer.triggers');

module.exports = (Developer) => {
    triggers.obeserve(Developer);
    settings.disableMethods(Developer);
    settings.enableValidations(Developer);

    Developer.getPackagesToUpdate = (id, cb) => {

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
                                        cb(null, error + failed);
                                    } else if (sucess.replace('\n', '') !== element.version) {
                                        response.push({ name: element.name, oldVersion: element.version, newVersion: sucess.replace('\n', '') });
                                    }

                                    if (i === total) { cb(null, response); }
                                });
                        });
                    });
            });
    };

    Developer.remoteMethod('getPackagesToUpdate', {
        http: { path: '/:id/getPackagesToUpdate', verb: 'get' },
        accepts: { arg: 'id', type: 'number', required: true },
        returns: { arg: 'body', root: true }
    });
};
