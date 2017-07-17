module.exports.obeserve = (Developer) => {
    Developer.observe('before delete', (ctx, next) => {
        console.log('User ' + ctx.instance.id + ' deleting');
        Developer.Project.destroyAll({ idUser: ctx.instance.id }, (err, obj) => {
            if (err) {
                console.log(err);
            } else {
                next();
            }
        });
    });
} 