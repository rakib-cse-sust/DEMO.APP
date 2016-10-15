(function () {
    angular.module('isotopeApp')
      .directive('isoRepeat', isoRepeat);

    isoRepeat.$inject = ['$timeout'];

    function isoRepeat($timeout) {

        var directive = {
            scope: {
                items: '=isoRepeat'
            },
            templateUrl: 'Modules/Isotope/partials/IsotopeGallery.html',
            link: function (scope, element, attrs) {

                $(window).load(function () {

                    var options = {
                        itemSelector: '.isotope-item',
                        layoutMode: 'masonry',
                        masonry: {
                            columnWidth: 100,
                            gutter: 12
                        },
                        sortAscending: false
                    };

                    element.isotope(options);

                });

                scope.$watch('items', function (newVal, oldVal) {

                    //if (newVal == oldVal) return;
                    $timeout(function () {

                        var options = {
                            itemSelector: '.isotope-item',
                            layoutMode: 'masonry',
                            masonry: {
                                columnWidth: 100,
                                gutter: 12
                            },
                            sortAscending: false
                        };

                        element.isotope(options);

                        element.isotope('reloadItems').isotope({
                            sortBy: 'original-order'
                        });

                    });

                }, true);
            }
        };

        return directive;
    }

})();