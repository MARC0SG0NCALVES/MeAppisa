module.exports.enableValidations = (Package) => {
    Package.validatesPresenceOf('name', 'version');
    Package.validatesUniquenessOf('name', { message: 'package is not unique' });
}

module.exports.disableMethods = (Package) => {
    Package.disableRemoteMethodByName('create');
    Package.disableRemoteMethodByName('upsert');
    Package.disableRemoteMethodByName('updateAll');
    Package.disableRemoteMethodByName('prototype.updateAttributes');

    Package.disableRemoteMethodByName('find');
    Package.disableRemoteMethodByName('findById');
    Package.disableRemoteMethodByName('findOne');

    Package.disableRemoteMethodByName('deleteById');

    Package.disableRemoteMethodByName('confirm');
    Package.disableRemoteMethodByName('count');
    Package.disableRemoteMethodByName('exists');
    Package.disableRemoteMethodByName('upsertWithWhere');
    Package.disableRemoteMethodByName('replaceOrCreate');
    Package.disableRemoteMethodByName('replaceById');
    Package.disableRemoteMethodByName('createChangeStream');
    Package.disableRemoteMethodByName('upsertWithWhere');

    Package.disableRemoteMethodByName('prototype.__get__developers');
}
