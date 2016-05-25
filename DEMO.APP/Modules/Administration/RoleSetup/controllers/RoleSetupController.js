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
            vm.RoleList = [{ 'Id': 1, 'Name': 'Admin' }, { 'Id': 2, 'Name': 'User admin' },
                { 'Id': 3, 'Name': 'Manager' }, { 'Id': 4, 'Name': 'Developer' }, { 'Id': 5, 'Name': 'Anonymous' }];
        }
    }
})();
