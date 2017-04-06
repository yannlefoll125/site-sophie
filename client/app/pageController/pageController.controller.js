'use strict';
const angular = require('angular');

/*@ngInject*/
export function pageController($scope, $location) {
	var self = this;

	this.route = $location.path();
	this.test = 'test string';

	this.headerImage = {
		'/accueil': '../assets/images/header.jpg',
		'/gestalt': '../assets/images/mouette_header.jpg',
		'/autres': '../assets/images/marche_header.jpg',
		'/proposition': '../assets/images/header.jpg',
		'/seance': '../assets/images/phare_header.jpg',
		'/contact': '../assets/images/header.jpg'


	}

	this.headerImageUrl = this.headerImage[this.route];

	$scope.$on('$routeChangeSuccess', function() {
		console.log($location.path());
		self.route = $location.path();
		self.headerImageUrl = self.headerImage[self.route];
	});
}

export default angular.module('siteSophieApp.pageController', [])
.controller('PageController', pageController)
.name;
