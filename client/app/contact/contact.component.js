'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './contact.routes';

export class ContactComponent {
  /*@ngInject*/
  constructor() {
    this.submitted = false;
    this.values = {};
  }

  onFormSubmit(form) {
    this.submitted = true;



    console.log("onFormSubmit");
    console.log(this);

    if(form.$valid) {
      console.log("Form is valid");

      //Resetting form
      this.values = {};
      form.$setPristine();
      form.$setUntouched();
      this.submitted = false;
      

    } else {
      console.log("Form is invalid");
    }
  }
}

export default angular.module('siteSophieApp.contact', [ngRoute])
.config(routes)
.component('contact', {
  template: require('./contact.html'),
  controller: ContactComponent
})
.name;
