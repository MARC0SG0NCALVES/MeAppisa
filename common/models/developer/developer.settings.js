module.exports.enableValidations = (Developer) => {
    Developer.validatesPresenceOf('email', 'password');
    Developer.validatesUniquenessOf('email', { message: 'email is not unique' });
    Developer.validatesLengthOf('password', { min: 5, message: { min: 'Password is too short' } });
}

module.exports.disableMethods = (Developer) => {
    Developer.disableRemoteMethodByName("upsert");
    Developer.disableRemoteMethodByName("updateAll");
    Developer.disableRemoteMethodByName("prototype.updateAttributes");

    Developer.disableRemoteMethodByName("find");
    Developer.disableRemoteMethodByName("findById");
    Developer.disableRemoteMethodByName("findOne");

    Developer.disableRemoteMethodByName("deleteById");

    Developer.disableRemoteMethodByName("confirm");
    Developer.disableRemoteMethodByName("count");
    Developer.disableRemoteMethodByName("exists");
    Developer.disableRemoteMethodByName("resetPassword");

    Developer.disableRemoteMethodByName('upsertWithWhere');
    Developer.disableRemoteMethodByName('replaceOrCreate');
    Developer.disableRemoteMethodByName('replaceById');
    Developer.disableRemoteMethodByName('createChangeStream');
    Developer.disableRemoteMethodByName('upsertWithWhere');

    Developer.disableRemoteMethodByName('prototype.__count__accessTokens');
    Developer.disableRemoteMethodByName('prototype.__create__accessTokens');
    Developer.disableRemoteMethodByName('prototype.__delete__accessTokens');
    Developer.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
    Developer.disableRemoteMethodByName('prototype.__findById__accessTokens');
    Developer.disableRemoteMethodByName('prototype.__get__accessTokens');
    Developer.disableRemoteMethodByName('prototype.__updateById__accessTokens');

    Developer.disableRemoteMethodByName('prototype.__delete__packages');
}