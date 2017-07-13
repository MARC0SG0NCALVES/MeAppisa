'use strict';

module.exports = (Project) => {
    Project.observe('before delete', (ctx, next) => {
        next();
    });
};
