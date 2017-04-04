'use strict';
const angular = require('angular');

export default angular.module('siteSophieApp.imgHeader', [])
.directive('imgHeader', ['$window', function($window) {
	return {
		template: require('./imgHeader.html'),
		restrict: 'E',
		link: function(scope, element, attrs) {

			var imageSrc = attrs['imageSrc'];
			var ratio = attrs['ratio'];

			var header = element.find('header');
			var bottomDiv;
			console.log(header.children());
			angular.forEach(header.children(), function(el) {
				if(el.id == 'bottom') {
					bottomDiv = angular.element(el);
					
				}
			});

			console.log(bottomDiv);


			

			scope.resizeHeader = function() {
				var headerWidth = header[0].clientWidth;
				var headerHeight = (headerWidth * ratio);

				header.css('height', headerHeight + 'px');

				bottomDiv.css('font-size', (0.18 * headerHeight) + 'px');

			}

			angular.element($window).on('resize', function() {
				scope.resizeHeader();
			});

			/*header.css('width', '100%');
			header.css('background-repeat', 'no-repeat');
			header.css('background-size', '100%');*/
			header.css('background-image', 'url("' + imageSrc + '")');
			scope.resizeHeader();

		}
	};
}])
.name;
