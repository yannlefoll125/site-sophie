'use strict';
const angular = require('angular');
const ngRoute = require('angular-route');


import routes from './contact.routes';

export class ContactComponent {
  /*@ngInject*/
  constructor($http) {
    this.submitted = false;
    this.values = {
      name: "testname",
      firstname: "firstname",
      email: "email@email.com",
      message: "message"
    };
    this.$http = $http;

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

      this.sendEmail(this.values);
      

    } else {
      console.log("Form is invalid");
    }
  }

  sendEmail(values) {
    var headers = {
      "Content-Type": "application/json"
    }

    this.$http.post("http://localhost:9000/contact", { headers: headers}).then(function(res) {
      console.log("post success");
      console.log(res.data);
    }, function(res) {
      console.log("post error");
    })
  }
}

//ContactComponent.$inject = ['$http', '$cookie'];

export default angular.module('siteSophieApp.contact', [ngRoute])
.config(routes)
.component('contact', {
  template: require('./contact.html'),
  controller: ContactComponent
})
.name;
