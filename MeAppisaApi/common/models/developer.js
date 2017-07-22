'use strict';

var helpers = require('../helpers');
var methods = require('./developer/developer.methods');
var settings = require('./developer/developer.settings');
var triggers = require('./developer/developer.triggers');

module.exports = (Developer) => {
    triggers.obeserve(Developer);
    methods.enableMethods(Developer);
    settings.disableMethods(Developer);
    settings.enableValidations(Developer);

    Developer.remoteMethod('getToUpdated', {
        http: { path: '/:id/getToUpdated', verb: 'get' },
        accepts: { arg: 'id', type: 'number', required: true },
        returns: { arg: 'body', root: true }
    });
};
