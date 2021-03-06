﻿(function () {
    'use strict';

    angular
        .module('roleSetupApp')
        .controller('roleSetupController', RoleSetupController);

    RoleSetupController.$inject = ['$location'];

    function RoleSetupController($location) {

        var vm = this;
        vm.title = 'RoleSetupController';

        activate();

        function activate() {

            vm.RoleList = [{
                Id: 1, Name: 'Admin', ModuleList: [{
                    Id: 1, ModuleName: 'ModuleName11', ScreenList:
                        [
                            { Id: 1, ScreenName: 'ScreenName11', model: 'N' },
                            { Id: 2, ScreenName: 'ScreenName12', model: 'R' },
                            { Id: 3, ScreenName: 'ScreenName13', model: 'W' },
                            { Id: 4, ScreenName: 'ScreenName14', model: 'R' }]
                }, {
                    Id: 2, ModuleName: 'ModuleName12', ScreenList:
                        [
                        { Id: 1, ScreenName: 'ScreenName11', model: 'R' },
                        { Id: 2, ScreenName: 'ScreenName12', model: 'R' },
                        { Id: 3, ScreenName: 'ScreenName13', model: 'R' }]
                }, {
                    Id: 3, ModuleName: 'ModuleName13', ScreenList:
                        [
                            { Id: 1, ScreenName: 'ScreenName11', model: 'W' },
                            { Id: 2, ScreenName: 'ScreenName12', model: 'N' }]
                }, {
                    Id: 4, ModuleName: 'ModuleName14', ScreenList:
                        [
                            { Id: 1, ScreenName: 'ScreenName11', model: 'R' },
                            { Id: 2, ScreenName: 'ScreenName12', model: 'R' },
                            { Id: 3, ScreenName: 'ScreenName13', model: 'W' },
                            { Id: 4, ScreenName: 'ScreenName14', model: 'N' }]
                }
                    , {
                        Id: 5, ModuleName: 'ModuleName15', ScreenList:
                        [
                            { Id: 1, ScreenName: 'ScreenName11', model: 'R' },
                            { Id: 2, ScreenName: 'ScreenName12', model: 'N' },
                            { Id: 3, ScreenName: 'ScreenName13', model: 'W' }]
                    }, {
                        Id: 6, ModuleName: 'ModuleName16', ScreenList:
                            [
                                { Id: 1, ScreenName: 'ScreenName11', model: 'R' }]
                    }]
            }

                , {
                    Id: 2, Name: 'Admin developer', ModuleList: [{
                        Id: 1, ModuleName: 'ModuleName11', ScreenList:
                            [
                                { Id: 2, ScreenName: 'ScreenName12', model: 'R' }
                            ]
                    }]
                }
                , {
                    Id: 3, Name: 'Admin manager'
                    , ModuleList: [{
                        Id: 1, ModuleName: 'ModuleName11', ScreenList:
                            [
                                { Id: 1, ScreenName: 'ScreenName11', model: 'N' },
                                { Id: 2, ScreenName: 'ScreenName12', model: 'R' }
                            ]
                    }]
                }, {
                    Id: 4, Name: 'Developer', ModuleList: [{
                        Id: 1, ModuleName: 'ModuleName11', ScreenList:
                            [
                                { Id: 2, ScreenName: 'ScreenName12', model: 'R' }
                            ]
                    }]
                }
                , {
                    Id: 5, Name: 'Manager'
                    , ModuleList: [{
                        Id: 1, ModuleName: 'ModuleName11', ScreenList:
                            [
                                { Id: 1, ScreenName: 'ScreenName11', model: 'N' },
                                { Id: 2, ScreenName: 'ScreenName12', model: 'R' }
                            ]
                    }]
                }, {
                    Id: 6, Name: 'Admin developer 111', ModuleList: [{
                        Id: 1, ModuleName: 'ModuleName11', ScreenList:
                            [
                                { Id: 2, ScreenName: 'ScreenName12', model: 'R' }
                            ]
                    }]
                }
                , {
                    Id: 7, Name: 'Admin manager 222'
                    , ModuleList: [{
                        Id: 1, ModuleName: 'ModuleName11', ScreenList:
                            [
                                { Id: 1, ScreenName: 'ScreenName11', model: 'N' },
                                { Id: 2, ScreenName: 'ScreenName12', model: 'R' }
                            ]
                    }]
                }, {
                    Id: 8, Name: 'Admin developer 333', ModuleList: [{
                        Id: 1, ModuleName: 'ModuleName11', ScreenList:
                            [
                                { Id: 2, ScreenName: 'ScreenName12', model: 'R' }
                            ]
                    }]
                }
                , {
                    Id: 9, Name: 'Admin manager 444'
                    , ModuleList: [{
                        Id: 1, ModuleName: 'ModuleName11', ScreenList:
                            [
                                { Id: 1, ScreenName: 'ScreenName11', model: 'N' },
                                { Id: 2, ScreenName: 'ScreenName12', model: 'R' }
                            ]
                    }]
                }

            ];
        }

    }
})();