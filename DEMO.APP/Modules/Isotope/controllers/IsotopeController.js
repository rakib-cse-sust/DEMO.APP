(function () {
    'use strict';

    angular
        .module('isotopeApp')
        .controller('IsotopeController', IsotopeController);

    IsotopeController.$inject = ['$location']; 

    function IsotopeController($location) {

        var vm = this;
        vm.title = 'IsotopeController';

        activate();

        function activate() {

            vm.imageItems = [

              { Id: 1, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxczu3RzNoXDXNpVcDzMTwgXvwLdOOiG3hcLcd7eoApdmW5XEsKg' },
              { Id: 2, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://art.ekstrax.com/wp-content/uploads/2015/03/architecture-2.jpg' },
              { Id: 3, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://www.theartcareerproject.com/wp-content/uploads/2011/12/iStock_000016523977XSmall-1.jpg' },
              { Id: 4, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://art.ekstrax.com/wp-content/uploads/2015/03/architecture-2.jpg' },
              { Id: 5, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://thumb7.shutterstock.com/display_pic_with_logo/703966/225873019/stock-vector-architecture-sketch-225873019.jpg' },
              { Id: 6, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://www.ufe-costadelsol.org/wp-content/uploads/2015/09/Mahmoud-Heidarian-Vancouver-modern-architecture.jpg' },
              { Id: 7, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://www.westminster.ac.uk/sites/default/files/styles/large/public/fpp/media/architecture-and-the-built-environment.jpg?itok=Iwb5XMkU' },
              { Id: 8, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://cache.lego.com/r/www/r/architecture/-/media/franchises/architecture%202015/explore/studio/endorsedbytheprofessionals_tout_720.jpg?l.r2=-547357998' },
              { Id: 9, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://www.planetizen.com/files/images/Architecture%2001%20-%20D.%20Laird_0.jpg' },
              { Id: 10, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://cdn.shopify.com/s/files/1/0884/3504/products/Kinetic_Architecture.jpg?v=1462141538' },
              { Id: 11, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://thumbs.dreamstime.com/z/rolls-architecture-blueprint-work-tools-14438775.jpg' },
              { Id: 12, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://s3.amazonaws.com/architecture-org/files/modules/chicago_architecture_foundation_river_cruise_chica-2.jpg' },
              { Id: 13, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://publicdomainarchive.com/wp-content/uploads/2015/03/public-domain-images-free-stock-photos-architecture-attraction-italian.jpeg' },
              { Id: 14, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://www.chalkstreet.com/blog/wp-content/uploads/2015/09/807769-free-architectural-wallpaper2.jpg' },
              { Id: 15, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://www.westminster.ac.uk/sites/default/files/styles/large/public/fpp/media/architecture-and-the-built-environment.jpg?itok=Iwb5XMkU' },
              { Id: 16, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxczu3RzNoXDXNpVcDzMTwgXvwLdOOiG3hcLcd7eoApdmW5XEsKg' },
              { Id: 17, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://www.westminster.ac.uk/sites/default/files/styles/large/public/fpp/media/architecture-and-the-built-environment.jpg?itok=Iwb5XMkU' },
              { Id: 18, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxczu3RzNoXDXNpVcDzMTwgXvwLdOOiG3hcLcd7eoApdmW5XEsKg' },
              { Id: 19, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://www.westminster.ac.uk/sites/default/files/styles/large/public/fpp/media/architecture-and-the-built-environment.jpg?itok=Iwb5XMkU' },
              { Id: 20, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxczu3RzNoXDXNpVcDzMTwgXvwLdOOiG3hcLcd7eoApdmW5XEsKg' },
              { Id: 21, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://www.westminster.ac.uk/sites/default/files/styles/large/public/fpp/media/architecture-and-the-built-environment.jpg?itok=Iwb5XMkU' },
              { Id: 22, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://art.ekstrax.com/wp-content/uploads/2015/03/architecture-2.jpg' },
              { Id: 23, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://www.theartcareerproject.com/wp-content/uploads/2011/12/iStock_000016523977XSmall-1.jpg' },
              { Id: 24, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://art.ekstrax.com/wp-content/uploads/2015/03/architecture-2.jpg' },
              { Id: 25, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://thumb7.shutterstock.com/display_pic_with_logo/703966/225873019/stock-vector-architecture-sketch-225873019.jpg' },
              { Id: 26, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://www.ufe-costadelsol.org/wp-content/uploads/2015/09/Mahmoud-Heidarian-Vancouver-modern-architecture.jpg' },
              { Id: 27, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'https://www.westminster.ac.uk/sites/default/files/styles/large/public/fpp/media/architecture-and-the-built-environment.jpg?itok=Iwb5XMkU' },
              { Id: 28, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://cache.lego.com/r/www/r/architecture/-/media/franchises/architecture%202015/explore/studio/endorsedbytheprofessionals_tout_720.jpg?l.r2=-547357998' },
              { Id: 29, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://www.planetizen.com/files/images/Architecture%2001%20-%20D.%20Laird_0.jpg' },
              { Id: 30, 'ImageName': 'ELEMTAG_Win8.1Pro_BFB_White_BlueFont_AM_BR_Medium_Web.png', 'ImageSrc': 'http://cdn.shopify.com/s/files/1/0884/3504/products/Kinetic_Architecture.jpg?v=1462141538' },
              
            ];

        }
    }
})();
