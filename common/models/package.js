'use strict';


var helpers = require('../helpers');
var methods = require('./package/package.methods');
var settings = require('./package/package.settings');
var triggers = require('./package/package.triggers');

module.exports = function (Package) {
    triggers.obeserve(Package);
    methods.enableMethods(Package);
    settings.disableMethods(Package);
    settings.enableValidations(Package);

    Package.remoteMethod('searchOne', {
        http: { path: '/searchOne', verb: 'get' },
        accepts: { arg: 'filter', type: 'string' },
        returns: { arg: 'body', root: true }
    });

    Package.remoteMethod('search', {
        http: { path: '/search', verb: 'get' },
        accepts: { arg: 'filter', type: 'string' },
        returns: { arg: 'body', root: true }
    });

};
