(function () {
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
                            { Id: 1, ScreenName: 'ScreenName11', none: 'N', read: 'R', write: 'W', model: 'N' },
                            { Id: 2, ScreenName: 'ScreenName12', none: 'N', read: 'R', write: 'W', model: 'R' },
                            { Id: 3, ScreenName: 'ScreenName13', none: 'N', read: 'R', write: 'W', model: 'W' },
                            { Id: 4, ScreenName: 'ScreenName14', none: 'N', read: 'R', write: 'W', model: 'R' }]
                    }, {
                        Id: 2, ModuleName: 'ModuleName12', ScreenList:
                            [
                            { Id: 1, ScreenName: 'ScreenName11', none: 'N', read: 'R', write: 'W', model: 'R' },
                            { Id: 2, ScreenName: 'ScreenName12', none: 'N', read: 'R', write: 'W', model: 'R' },
                            { Id: 3, ScreenName: 'ScreenName13', none: 'N', read: 'R', write: 'W', model: 'R' }]
                    }, {
                        Id: 3, ModuleName: 'ModuleName13', ScreenList:
                            [
                                { Id: 1, ScreenName: 'ScreenName11', none: 'N', read: 'R', write: 'W', model: 'W' },
                                { Id: 2, ScreenName: 'ScreenName12', none: 'N', read: 'R', write: 'W', model: 'N' }]
                    }, {
                        Id: 4, ModuleName: 'ModuleName14', ScreenList:
                            [
                                { Id: 1, ScreenName: 'ScreenName11', none: 'N', read: 'R', write: 'W', model: 'R' },
                                { Id: 2, ScreenName: 'ScreenName12', none: 'N', read: 'R', write: 'W', model: 'R' },
                                { Id: 3, ScreenName: 'ScreenName13', none: 'N', read: 'R', write: 'W', model: 'W' },
                                { Id: 4, ScreenName: 'ScreenName14', none: 'N', read: 'R', write: 'W', model: 'N' }]
                    }
                    , {
                        Id: 5, ModuleName: 'ModuleName15', ScreenList:
                        [
                            { Id: 1, ScreenName: 'ScreenName11', none: 'N', read: 'R', write: 'W', model: 'R' },
                            { Id: 2, ScreenName: 'ScreenName12', none: 'N', read: 'R', write: 'W', model: 'N' },
                            { Id: 3, ScreenName: 'ScreenName13', none: 'N', read: 'R', write: 'W', model: 'W' }]
                    }, {
                        Id: 6, ModuleName: 'ModuleName16', ScreenList:
                            [
                                { Id: 1, ScreenName: 'ScreenName11', none: 'N', read: 'R', write: 'W', model: 'R' }]
                    }]
                }

                , {
                    Id: 2, Name: 'Admin developer'
                }
                , {
                    Id: 3, Name: 'Admin manager'
                }

                ];
        }

    }
})();


//vm.visualItems = [
//       {
//           id: '1',
//           name: 'Fuel Empty',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'first'
//       },
//       {
//           id: '2',
//           name: 'Oil Empty',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'second'
//       },
//       {
//           id: '3',
//           name: 'Spark Plug',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'third'
//       },
//       {
//           id: '4',
//           name: 'Air Filter',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'fourth'
//       },
//       {
//           id: '5',
//           name: 'Blade',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'fifth'
//       },
//       {
//           id: '6',
//           name: 'Pull Start',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'sixth'
//       },
//       {
//           id: '7',
//           name: 'Deck',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'seventh'
//       },
//       {
//           id: '8',
//           name: 'Wheels',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'eight'
//       },
//       {
//           id: '9',
//           name: 'Handles',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'nine'
//       },
//       {
//           id: '10',
//           name: 'Throttle/Pull Cable',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'ten'
//       },
//       {
//           id: '11',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'eleven'

//       },
//       {
//           id: '12',
//           name: 'Grass Box',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'tweleve'
//       },
//       {
//           id: '13',
//           name: 'Fuel Pipe',
//           one: 'red',
//           two: 'amber',
//           three: 'green',
//           model: 'thirteen'
//       }
//];

//vm.visualItem = {
//    visual: [{
//        VisualItem: vm.visualItems[0]
//    }]
//}