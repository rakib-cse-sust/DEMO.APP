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
            vm.RoleList = [
  {
      "Id": 1,
      "Name": "Admin",
      "ModuleList": [
        {
            "Id": 1,
            "ModuleName": "ModuleName11",
            "ScreenList": [
              {
                  "Id": 1,
                  "ScreenName": "ScreenName11"
              },
              {
                  "Id": 2,
                  "ScreenName": "ScreenName12"
              },
              {
                  "Id": 3,
                  "ScreenName": "ScreenName13"
              },
              {
                  "Id": 4,
                  "ScreenName": "ScreenName14"
              },
              {
                  "Id": 5,
                  "ScreenName": "ScreenName15"
              },
              {
                  "Id": 6,
                  "ScreenName": "ScreenName16"
              }
            ]
        },
        {
            "Id": 2,
            "ModuleName": "ModuleName12",
            "ScreenList": [
              {
                  "Id": 1,
                  "ScreenName": "ScreenName11"
              },
              {
                  "Id": 2,
                  "ScreenName": "ScreenName12"
              },
              {
                  "Id": 3,
                  "ScreenName": "ScreenName13"
              }
            ]
        },
        {
            "Id": 3,
            "ModuleName": "ModuleName13",
            "ScreenList": [
              {
                  "Id": 1,
                  "ScreenName": "ScreenName11"
              },
              {
                  "Id": 2,
                  "ScreenName": "ScreenName12"
              }
            ]
        },
        {
            "Id": 4,
            "ModuleName": "ModuleName14",
            "ScreenList": [
              {
                  "Id": 1,
                  "ScreenName": "ScreenName11"
              },
              {
                  "Id": 2,
                  "ScreenName": "ScreenName12"
              },
              {
                  "Id": 3,
                  "ScreenName": "ScreenName13"
              },
              {
                  "Id": 4,
                  "ScreenName": "ScreenName14"
              }]
        },
        {
            "Id": 5,
            "ModuleName": "ModuleName15",
            "ScreenList": [
              {
                  "Id": 1,
                  "ScreenName": "ScreenName11"
              },
              {
                  "Id": 2,
                  "ScreenName": "ScreenName12"
              },
              {
                  "Id": 3,
                  "ScreenName": "ScreenName13"
              }
            ]
        },
        {
            "Id": 6,
            "ModuleName": "ModuleName16",
            "ScreenList": [
              {
                  "Id": 1,
                  "ScreenName": "ScreenName11"
              }
            ]
        }
      ]
  },
  {
      "Id": 2,
      "Name": "User admin",
      "ModuleList": [
        {
            "Id": 1,
            "ModuleName": "ModuleName21"
        },
        {
            "Id": 2,
            "ModuleName": "ModuleName22"
        },
        {
            "Id": 3,
            "ModuleName": "ModuleName23"
        }
      ]
  },
  {
      "Id": 3,
      "Name": "Manager",
      "ModuleList": [
        {
            "Id": 1,
            "ModuleName": "ModuleName31"
        }
      ]
  },
  {
      "Id": 4,
      "Name": "Developer",
      "ModuleList": [
        {
            "Id": 1,
            "ModuleName": "ModuleName41"
        },
        {
            "Id": 2,
            "ModuleName": "ModuleName42"
        },
        {
            "Id": 3,
            "ModuleName": "ModuleName43"
        }
      ]
  },
  {
      "Id": 5,
      "Name": "Anonymous",
      "ModuleList": [
        {
            "Id": 1,
            "ModuleName": "ModuleName51"
        },
        {
            "Id": 3,
            "ModuleName": "ModuleName53"
        }
      ]
  }
            ];
        }
        console.log(JSON.stringify(vm.RoleList));
    }
})();