'use strict';
const angular = require('angular');

export default angular.module('siteSophieApp.imgHeader', [])
.directive('imgHeader', ['$window', function($window) {
	return {
		template: require('./imgHeader.html'),
		restrict: 'E',
		link: function(scope, element, attrs) {

			let imageSrc = attrs['imageSrc'];
			let ratio = attrs['ratio'];

			let header = element.find('header');
			//let bottomDiv = angular.element(document.getElementById('bottom'));


			scope.updateHeader = function() {
				let headerWidth = header[0].clientWidth;
				let headerHeight = (headerWidth * ratio);

				header.css('height', headerHeight + 'px');

				/*
				let bottomDivHeight = headerHeight * bottomDivHeightRatio;
				bottomDiv.css('height', bottomDivHeight + 'px');
				bottomDiv.css('font-size', 0.7 * bottomDivHeight + 'px');
				*/


			}

			angular.element($window).on('resize', function() {
				scope.updateHeader();

			});

			/*header.css('width', '100%');
			header.css('background-repeat', 'no-repeat');
			header.css('background-size', '100%');*/
			header.css('background-image', 'url("' + imageSrc + '")');
			scope.updateHeader();

		}
	};
}])
.name;
