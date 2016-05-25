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
            vm.RoleList = [{ 'Id': 1, 'Name': 'Admin', 'ModuleList': [{ 'Id': 1, 'ScreenName': 'ScreenName11' }, { 'Id': 2, 'ScreenName': 'ScreenName12' }, { 'Id': 3, 'ScreenName': 'ScreenName13' }] },
{ 'Id': 2, 'Name': 'User admin', 'ModuleList': [{ 'Id': 1, 'ScreenName': 'ScreenName21' }, { 'Id': 2, 'ScreenName': 'ScreenName22' }, { 'Id': 3, 'ScreenName': 'ScreenName23' }] },
{ 'Id': 3, 'Name': 'Manager', 'ModuleList': [{ 'Id': 1, 'ScreenName': 'ScreenName31' }] },
{ 'Id': 4, 'Name': 'Developer', 'ModuleList': [{ 'Id': 1, 'ScreenName': 'ScreenName41' }, { 'Id': 2, 'ScreenName': 'ScreenName42' }, { 'Id': 3, 'ScreenName': 'ScreenName43' }] },
{ 'Id': 5, 'Name': 'Anonymous', 'ModuleList': [{ 'Id': 1, 'ScreenName': 'ScreenName51' },  { 'Id': 3, 'ScreenName': 'ScreenName53' }] }];
        }
    }
})();
