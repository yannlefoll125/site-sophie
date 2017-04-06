'use strict';
const angular = require('angular');

/*@ngInject*/
export function pageController($scope, $location) {
	var self = this;

	this.pageParams = {
		'/accueil': {
			image: '../assets/images/header.jpg',
			title: 'Accueil'
		},
		'/gestalt': {
			image: '../assets/images/mouette_header.jpg',
			title: 'Gestalt Thérapie'
		},
		'/autres': {
			image: '../assets/images/marche_header.jpg',
			title: 'Autres thérapies'
		},
		'/proposition': {
			image: '../assets/images/header.jpg',
			title: 'Ma proposition'
		},
		'/seance': {
			image: '../assets/images/phare_header.jpg',
			title: 'Séances et tarifs'
		},
		'/contact': {
			image: '../assets/images/header.jpg',
			title: 'Contact'
		}
	};

	this.route = $location.path();
	this.headerImageUrl = this.pageParams[this.route];
	this.pageTitle = this.pageParams[this.route];

	$scope.$on('$routeChangeSuccess', function() {
		console.log($location.path());
		self.route = $location.path();
		self.headerImageUrl = self.pageParams[self.route].image;
		self.pageTitle = self.pageParams[self.route].title;
	});
}

export default angular.module('siteSophieApp.pageController', [])
.controller('PageController', pageController)
.name;
