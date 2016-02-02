/**
 * cordova App List Plugin
 * Copyright (c) Avramovic Uros 2014
 *
 */
(function (cordova) {
    var AppList = function () {
    };

    AppList.prototype.includeSystemApps = false;

    AppList.prototype.getAppList = function (excludeList, success, fail) {
        var me = this;

        if (excludeList.constructor !== Array) {
            return "Invalid argument. Expected Array, found " + excludeList.constructor.name;
        }

        return cordova.exec(function (args) {
            success(args);
        }, function (args) {
            fail(args);
        }, 'AppListPlugin', 'listApps', [me.includeSystemApps, excludeList]);
    };

    AppList.prototype.launchApp = function (packageName, success, fail) {
        return cordova.exec(function (args) {
            success(args);
        }, function (args) {
            fail(args);
        }, 'AppListPlugin', 'launchApp', [packageName]);
    };

    AppList.install = function () {
        if (!window.plugins) {
            window.plugins = {};
        }

        window.plugins.AppList = new AppList();
    };

    AppList.install();

})(window.cordova);