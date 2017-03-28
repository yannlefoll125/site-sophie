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

			

			scope.resizeHeader = function() {
				var headerWidth = header[0].clientWidth;
				var headerHeight = (headerWidth * ratio) + 'px';
				header.css('height', headerHeight);
			}

			angular.element($window).on('resize', function() {
				scope.resizeHeader();
			});

			/*header.css('width', '100%');
			header.css('background-repeat', 'no-repeat');
			header.css('background-size', '100%');*/
			header.css('background-image', 'url("' + imageSrc + '")');
			scope.resizeHeader();

			console.log(header);


		}
	};
}])
.name;
